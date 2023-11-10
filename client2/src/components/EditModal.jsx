import React, { useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CInputGroup,
} from "@coreui/react";
import axios from "axios";
import { json } from "express";

const EditModal = ({
  visible,
  setVisible,
  selectedId,
  setSelectId,
  data,
  setData,
}) => {
  const [updatedTask, setUpdatedTask] = useState({
    taskName: "",
    deadline: "",
  });

  const [error, setError] = useState("");

  async function editTask() {
    try {
      let res = await axios.post(`/api/task/${selectedId}`, updatedTask, {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      });

      if (res.status === 200) {
        setData(!data) ;  ///new copy of data
        setVisible(false);
      } else {
        setError("Failed To Edit Task . Please try Again");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <CModal
        visible={visible}
        onClose={() => {
          setSelectId("");
          setVisible(false);
        }}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader
          onClose={() => {
            setSelectId("");
            setVisible(false);
          }}
        >
          <CModalTitle id="LiveDemoExampleLabel">Edit Task</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {error && <p className="text-danger"> {error} </p>}
          <CInputGroup
            typeof="text"
            placeholder="Task Name"
            value={updatedTask.taskName}
            onChange={(e) => {
              setUpdatedTask({ ...updatedTask, taskName: e.target.value });
            }}
          />
          <CInputGroup
            type="date"
            placeholder="Deadline"
            value={updatedTask.deadline}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, deadline: e.target.value })
            }
          />
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={() => {
              setSelectId("");
              setVisible(false);
            }}
          >
            Close
          </CButton>
          <CButton color="danger" onClick={editTask}>
            Edit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default EditModal;
