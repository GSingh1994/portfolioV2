import sendIcon from "../assets/send.svg";
const Contact = () => {
  return (
    <div className="Contact">
      <h2>{"> Contact me"}</h2>
      <p>
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </p>

      <form action="">
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
        />

        <label htmlFor="message">message:</label>
        <textarea
          name="message"
          id="message"
          rows="8"
          placeholder="Hey how's it going?"
        ></textarea>
        <button className="send-btn">
          Send <img src={sendIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
