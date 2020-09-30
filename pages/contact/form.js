import fetch from 'node-fetch';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { isLength, isMail } from '../../utils/form_validation';
import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';

const Form = () => {
  const [isDisabled, setisDisabled] = useState(false);
  const [errors, setErrors] = useState({ errs: { name: '', email: '', contents: '' } });
  const [isChecked, setIsChecked] = useState(0);

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
    if (name == 'agreement' && value == 1) {
      setIsChecked(0);
    } else if (name == 'agreement' && value == 0) {
      setIsChecked(1);
    }
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
    if (isChecked == 0) err.agreement = '「プラバシーポリシー」の内容に同意してください';
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
      <div className="p-8 mt-6 lg:mt-0 md:w-9/12 md:ml-24 lg:ml-40">
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
              {errors.errs.name ? <p className="mt-2 text-red-700">{errors.errs.name}</p> : null}
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
              {errors.errs.email ? <p className="mt-2 text-red-700">{errors.errs.email}</p> : null}
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
              {errors.errs.contents ? <p className="mt-2 text-red-700">{errors.errs.contents}</p> : null}
            </div>
          </div>
          <div className="my-6 text-center">
            <label>
              <input className="" type="checkbox" name="agreement" value={isChecked} onChange={handleChange} />
              <span className="text-left inline-block">
                当サイトの「
                <a href="/privacy" target="_blank">
                  プライバシーポリシー
                </a>
                」の内容に同意する。
                <br />
                ※ご同意いただけない場合は送信ができません。
              </span>
              {errors.errs.agreement ? <p className="mt-2 mr-20 text-red-700">{errors.errs.agreement}</p> : null}
              <p></p>
            </label>
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
