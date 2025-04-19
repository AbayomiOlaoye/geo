"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useSnackbar } from 'notistack';


const Admin = () => {
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [certificateNumber, setCertificateNumber] = useState(null);
  const [awardDate, setAwardDate] = useState('');
  const [status, setStatus] = useState('Member');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    setEditDialogOpen(false);
    setSelectedStudent(null);
  };

  const studentWithSerial = studentData?.map((student, index) => ({ ...student, id: index + 1 }));

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setEditDialogOpen(true);
  };

  const handleFetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/students`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch students');
      }
      const data = await response.json();
      setStudentData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch students.');
    } finally {
      setLoading(false);
    }
  }

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    setCertificateNumber(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentName, course, awardDate, status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      const data = await response.json();
      setCertificateNumber(data.certificateNumber);
      setStudentName('');
      setCourse('');
      handleFetchStudents();
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStudent = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/students/${selectedStudent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: selectedStudent.studentName,
          course: selectedStudent.course,
          certificateNumber: selectedStudent.certificateNumber,
          awardDate: selectedStudent.awardDate,
          status: selectedStudent.status,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update student');
      }

      const updatedStudent = await response.json();
      setStudentData(studentData.map(student => (student._id === updatedStudent._id ? updatedStudent : student)));
      enqueueSnackbar('Student updated successfully!', { variant: 'success' });

      setEditDialogOpen(false);
      setSelectedStudent(null);
    } catch (err) {
      setError(err.message || 'Failed to update student.');
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/students/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to delete student');
        }
        setStudentData((prevData) => prevData.filter((student) => student._id !== id));
        enqueueSnackbar('Student deleted successfully!', { variant: 'success' });
      } catch (err) {
        setError(err.message || 'Failed to delete student.');
        enqueueSnackbar(err.message, { variant: 'error' });
      } finally {
        setLoading(false);
      }
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'studentName', headerName: 'Name', width: 150 },
    { field: 'course', headerName: 'Course', width: 150 },
    { field: 'certificateNumber', headerName: 'Certificate Number', width: 200 },
    { field: 'status', headerName: 'Membership Status', width: 150 },
    { field: 'awardDate', headerName: 'Date', width: 150, renderCell: (params) => {
      const awardDate = params.row?.awardDate;
      if (!awardDate || awardDate === 'Invalid Date') {
        return 'Invalid Date';
      }
      
      const date = new Date(awardDate);
      if (isNaN(date)) {
        return 'Invalid Date';
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }},
    {
      field: 'action', headerName: 'Action', width: 200, renderCell: (params) => (
        <>
          <Button color="primary" onClick={() => handleEdit(params.row)}>Edit</Button>
          <Button color="secondary" onClick={() => handleDelete(params.row?._id)}>Delete</Button>
        </>
      )
    },
  ];

  const slideInVariants = {
    hidden: { x: '100%' },
    visible: {
      x: '50%',
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full min-h-screen overflo"
    >
      <div className="flex relative mx-auto mt-14 flex-col w-[100%] h-[37vh] md:h-[40vh] justify-center items-center">
        <div className="absolute inset-0 mt-[-18vh] lg:w-[50%] lg:h-[20vh] left-0 z-10 flex flex-col items-center rounded-br-[50px] top-[45vh]">
          <div className="self-start p-5 lg:p-6 bg-[var(--choc)] w-full rounded-tr-4xl">
            <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Admin</h1>
          </div>
        </div>
        <Image src="/bg/verify-bg.jpg" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="container mx-auto py-10"
      >
        <h1 className="text-2xl text-[var(--choc)] font-bold mb-4 text-center">Admin Page</h1>
        <p className="text-blue-500 text-center mb-6">Register a graduating student and generate a unique certificate number.</p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{error}</span>
        </div>}

        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-[var(--choc)] text-sm font-bold mb-2" htmlFor="studentName">Student Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
              id="studentName"
              type="text"
              placeholder="Student Name"
              required
              autoFocus
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-[var(--choc)] text-sm font-bold mb-2" htmlFor="course">Course:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
              id="course"
              type="text"
              placeholder="Course"
              required
              autoFocus
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-[var(--choc)] text-sm font-bold mb-2" htmlFor="status">Membership Status:</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>Select Membership Status</option>
              <option value="Associate">Associate</option>
              <option value="Member">Member</option>
              <option value="Fellow">Fellow</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-[var(--choc)] text-sm font-bold mb-2" htmlFor="awardDate">Award Date:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
              id="awardDate"
              type="date"
              value={awardDate}
              onChange={(e) => setAwardDate(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[var(--choc)] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register Graduate'}
            </button>
          </div>

          {certificateNumber && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Certificate Number Generated: <span className="font-bold">{certificateNumber}</span>
            </div>
          )}
        </div>

        <section className="">
          <div className="flex justify-center">
            <button
              className="bg-[var(--choc)] hover:bg-blue-500 text-white font-bold py-2 px-4 my-10 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                setOpen(!open);
                handleFetchStudents();
              }
              }
            >
              {open ? 'Hide Certified Students' : 'Show Certified Students'}
            </button>
          </div>
          {open && (
            <>
              <div className="flex justify-between items-center">
                <motion.article
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 60 }}
                  className="flex items-center gap-4 text-2xl"
                >
                  <span className="font-medium">All Certified Students</span>
                </motion.article>
              </div>
              <article className="min-h-[20vh] mt-3 rounded-xl shadow-lg bg-white py-10 p-8">
                <DataGrid
                  rows={studentWithSerial}
                  columns={columns}
                  pageSize={10}
                  rowHeight={38}
                  disableSelectionOnClick
                  loading={loading}
                />
              </article>
            </>
          )}
        </section>
      </motion.div>

      <AnimatePresence>
        <Dialog open={editDialogOpen} onClose={handleClose} className="fixed inset-0 z-50 flex items-center justify-center">
        {editDialogOpen && selectedStudent && (
          <motion.div
            className="fixed top-0 right-0 h-full w-[50%] bg-white shadow-xl z-50 p-6"
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
            <DialogTitle>
              Edit Student Information
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="studentName"
                label="Student Name"
                type="text"
                fullWidth
                variant="standard"
                value={selectedStudent.studentName}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, studentName: e.target.value })}
              />
              <TextField
                margin="dense"
                id="course"
                label="Course"
                type="text"
                fullWidth
                variant="standard"
                value={selectedStudent.course}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, course: e.target.value })}
              />
              <TextField
                margin="dense"
                id="certificateNumber"
                label="Certificate Number"
                type="text"
                fullWidth
                variant="standard"
                value={selectedStudent.certificateNumber}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, certificateNumber: e.target.value })}
              />
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                value={selectedStudent.status}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, status: e.target.value })}
              >
                <option value="" disabled>Select Membership Status</option>
                <option value="Associate">Associate</option>
                <option value="Member">Member</option>
                <option value="Fellow">Fellow</option>
                <option value="Others">Others</option>
              </select>
              <TextField
                margin="dense"
                id="awardDate"
                type="date"
                fullWidth
                variant="standard"
                value={selectedStudent.awardDate}
                onChange={(e) => setSelectedStudent({ ...selectedStudent, awardDate: e.target.value })}
              />
            </DialogContent>
            <div>
              <Button className='text-blue-500 cursor-pointer' onClick={handleClose}>Cancel</Button>
              <Button onClick={handleUpdateStudent}>Update</Button>
            </div>
          </motion.div>
        )}
        </Dialog>
      </AnimatePresence>
    </motion.article>
  );
};

export default Admin;
