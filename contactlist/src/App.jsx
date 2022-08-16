import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ContactList from './components/contacts/contactList/ContactList';
import AddContacts from './components/contacts/addContacts/AddContacts';
import ViewContacts from './components/contacts/viewContacts/ViewContacts';
import EditContacts from './components/contacts/editContatct/EditContacts';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={'/contact/list'} />} />
        <Route path="/contact/list" element={<ContactList />} />
        <Route path="/contact/add" element={<AddContacts />} />
        <Route path="/contact/view/:contactId" element={<ViewContacts />} />
        <Route path="/contact/edit/:contactId" element={<EditContacts />} />
      </Routes>
    </>
  );
}

export default App
