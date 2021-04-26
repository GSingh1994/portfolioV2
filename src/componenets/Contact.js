import sendIcon from "../assets/send.svg";
const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <h2>{"> Contact me"}</h2>
      <p>
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </p>

      <form method="POST" name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="email">email:</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div>
          <label htmlFor="message">message:</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Hey how's it going?"
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
          <span>Send</span> <img src={sendIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
