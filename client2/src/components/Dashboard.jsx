import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CTableHeader,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CTableHead,
  CButton,
} from "@coreui/react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    async function authCheck() {
      try {
        let res = await axios.get("/api/user/auth", {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        });
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
    async function fetchData() {
      try {
        let res = await axios.get("/api/task/", {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        });
        setData(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    }
    authCheck();
    fetchData();
  }, []);

  return (
    <div className="tableDiv">
      <DeleteModal
        visible={visible}
        setVisible={setVisible}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <EditModal 
        visible={visible}
        setVisible={setVisible}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        setData={setData}
      />
      <CTable color="success" striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Task Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Deadline</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data &&
            data.map((ele, i) => {
              let deadlineDate = new Date(ele.deadline).toLocaleString();
              return (
                <CTableRow key={i}>
                  <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                  <CTableDataCell>{ele.taskName}</CTableDataCell>
                  <CTableDataCell>{deadlineDate}</CTableDataCell>
                  <CTableDataCell>
                    {ele.isCompleted ? "Completed" : "Pending"}
                  </CTableDataCell>
                  <CTableDataCell>
                    {" "}
                    <CButton
                      onClick={() => {
                        setSelectedId(ele._id);
                        setVisible(!visible);
                      }}
                    >
                      Delete
                    </CButton>
                    <CButton className="m-3" 
                    onClick={()=>{
                      setSelectedId(ele._id);
                      setVisible(!visible);
                    }}>
                      Edit  
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default Dashboard;
