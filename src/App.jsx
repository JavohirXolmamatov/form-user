import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import User from './components/users/User';
import Form from './components/modalForm/Form';

function App() {
  const [hideForm, sethideForm] = useState(true);

  const hidden = () => {
    sethideForm(!hideForm);
  };

  const [users, setUser] = useState([]);
  console.log(users);
  

  // Formdan kelgan foydalanuvchi ma'lumotlarini olish
  const userData = (newUserData) => {
    setUser([...users, newUserData]); // Yangi foydalanuvchini foydalanuvchilar ro'yxatiga qo'shish
  };

  const Count = () => {
    return users.length ? users.length : 'No User :(';
  };

  // Foydalanuvchini o'chirish funksiyasi
  const deleteUser = (index) => {
    setUser(users.filter((_, i) => i !== index));
  };

  return (
    <div className='a'>
      <Header Count={Count} />
      <main className='main'>
        <div className="home container">
          <User users={users} deleteUser = {deleteUser} />
          <h1>{users.length ? '' : 'No User :('}</h1>
          {hideForm && <Form userData={userData} />}
        </div>
        <button className='form-btn' onClick={hidden}>Create User</button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
