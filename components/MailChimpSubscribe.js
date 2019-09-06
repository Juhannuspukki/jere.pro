import React from 'react'

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
  
  return (
    <div className={"contactForm"}>
      {status === "sending" && <p className={"subscriptionMessage"}>Subscribing...</p>}
      {status === "error" && (
        <p className={"subscriptionMessage"}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <p className={"subscriptionMessage"}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
      <input
        className={"subscriptionForm"}
        ref={node => (email = node)}
        type="email"
        placeholder="you@example.com"
      />
      <br />
      <button className={"subscriptionButton"} onClick={submit}>
        Subscribe
      </button>
    </div>
  );
};
 export default CustomForm
