// import Button from '../Button/Button.jsx';
// import { Field, Form, Formik } from 'formik';
// import css from './PopUpNeedHelp.module.css';

// const initialValues = {
//   email: '',
//   comment: '',
// };

// export function PopUpNeedHelp() {
//   //   const sendHelp = values => {};
//   // Logic for send in Mail Need Help

//   return (
//     <div className={css.container}>
//       <p className={css.titleBoard}>Need help</p>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={(values, actions) => {
//           //   sendHelp(values);
//           actions.resetForm();
//         }}>
//         <Form>
//           <div className={css.titleEmailPosition}>
//             <Field
//               type='email'
//               name='email'
//               placeholder='Email address'
//               className={css.titleEmail}
//             />
//           </div>
//           <div className={css.CommentPosition}>
//             <Field type='text' name='comment' placeholder='Comment' className={css.CommentTitle} />
//           </div>
//           <Button type='submit' title='Send' className={css.createButton} />
//         </Form>
//       </Formik>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import css from './PopUpNeedHelp.module.css';

const initialValues = {
  email: '',
  comment: '',
};

export function PopUpNeedHelp({ onClose }) {
  const [isOpen, setIsOpen] = useState(true); // Додано стан isOpen

  const sendHelp = async (values, actions) => {
    try {
      // Логіка для відправки даних на сервер
      console.log('Sending help request:', values);
      // Очищення форми після успішної відправки
      actions.resetForm();
      // Закриття модального вікна
      setIsOpen(false);
      actions.setSubmitting(false);
    } catch (error) {
      console.error('Error sending help request:', error);
      actions.setSubmitting(false);
      // Логіка обробки помилок
    }
  };

  return (
    <div className={isOpen ? css.containerVisible : css.container}>
      <p className={css.titleBoard}>Need help</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          sendHelp(values, actions);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div className={css.titleEmailPosition}>
              <Field
                type='email'
                name='email'
                placeholder='Email address'
                className={css.titleEmail}
                required
              />
            </div>
            <div className={css.CommentPosition}>
              <Field
                type='text'
                name='comment'
                placeholder='Comment'
                className={css.CommentTitle}
                required
              />
            </div>
            <Button
              type='submit'
              title='Send'
              disabled={isSubmitting}
              className={css.createButton}
            />
          </Form>
        )}
      </Formik>
      <button className={css.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
}
