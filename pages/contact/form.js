import fetch from 'node-fetch';
import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Form = () => {
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: '',
    email: '',
    contents: '',
  });

  // change handler
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidation();
    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
    }
  };

  // validation check
  const formValidation = () => {
    let err = {};
    if (!form.name) err.name = 'お名前は必須項目です';
    if (!form.email) err.email = 'メールアドレスは必須項目です';
    if (!form.contents) err.contents = 'お問い合わせ内容は必須項目です';
    return err;
  };

  // SendGrid
  const router = useRouter();
  const postData = (formDta) => {
    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDta),
    }).then((res) => {
      if (res.status === 200) {
        router.push('/contact/thanks');
      } else {
        router.push('/contact/form');
      }
    });
  };

  return (
    <div>
      <Head title={'お問い合わせ（入力）'} url={'https://kagepedia.com/contact/form'} />
      <Header />
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">SendGrid Contact Form</h1>
        <p className="text-gray-500">SendGrid</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">お名前</label>
        <input type="text" maxLength="30" name="name" value={form.name} onChange={handleChange} required />
        <label htmlFor="email">メールアドレス</label>
        <input type="email" maxLength="30" name="email" value={form.email} onChange={handleChange} required />
        <label htmlFor="contents">お問い合わせ内容</label>
        <textarea name="contents" maxLength="80" value={form.contents} onChange={handleChange} required />
        <button type="submit" className="btn">
          送信する
        </button>
      </form>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Form;
