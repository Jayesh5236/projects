import React from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import axios from "axios";

const DeleteModal = ({ visible, setVisible, selectedId, setSelectedId }) => {
  async function deleteTask() {
    try {
      let res = await axios.post(
        `/api/task/delete/${selectedId}`,
        {},
        {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      setVisible(!visible);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <CModal
        visible={visible}
        onClose={() => {
          setSelectedId("");
          setVisible(false);
        }}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader
          onClose={() => {
            setSelectedId("");
            setVisible(false);
          }}
        >
          <CModalTitle id="LiveDemoExampleLabel">Delete Task</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this task?</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={() => {
              setSelectedId("");
              setVisible(false);
            }}
          >
            Close
          </CButton>
          <CButton color="danger" onClick={deleteTask}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default DeleteModal;
