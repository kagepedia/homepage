import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { isLength, isMail } from '../../utils/form_validation';

const Form = () => {
  const [isDisabled, setisDisabled] = useState(false);
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
    setisDisabled(true);
    const errs = formValidation();
    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
      setisDisabled(false);
    }
  };

  // validation check
  const formValidation = () => {
    let err = {};
    if (!form.name) err.name = 'お名前は必須項目です';
    if (form.name && isLength(form.name, 30) === false) err.name = 'お名前の文字数は30字以内で入力してください';
    if (!form.email) err.email = 'メールアドレスは必須項目です';
    if (form.email && isMail(form.email) === false) err.email = 'メールアドレスを正しく入力してください';
    if (!form.contents) err.contents = 'お問い合わせ内容は必須項目です';
    if (form.contents && isLength(form.contents, 200) === false) err.contents = 'お問い合わせ内容の文字数は200字以内で入力してください';
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
      <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <h1 className="text-2xl font-bold">お問い合わせフォーム</h1>
        <p className="text-gray-800 mb-10">当WEBサイトについてのお問い合わせ等、ご意見をお待ちしています。</p>
        <form onSubmit={handleSubmit}>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label htmlFor="name" className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4">
                お名前<span className="text-red-600">※</span>
              </label>
            </div>
            <div className="md:w-2/3">
              <input type="text" maxLength="30" name="name" className="form-input block w-full focus:bg-white" value={form.name} onChange={handleChange} required />
            </div>
          </div>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label htmlFor="email" className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4">
                メールアドレス<span className="text-red-600">※</span>
              </label>
            </div>
            <div className="md:w-2/3">
              <input type="email" maxLength="30" name="email" className="form-input block w-full focus:bg-white" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label htmlFor="contents" className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4">
                お問い合わせ内容<span className="text-red-600">※</span>
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea name="contents" className="form-textarea block w-full focus:bg-white" maxLength="200" rows="8" value={form.contents} onChange={handleChange} required></textarea>
            </div>
          </div>
          <div>
            {Object.keys(errors).map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                type="submit"
                className="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                disabled={isDisabled ? 'disabled' : null}
              >
                送信する
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
