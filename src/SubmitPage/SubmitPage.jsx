import styles from "./SubmitPage.module.css";

function SubmitPage() {
  return (
    <div className={styles["submit-page"]}>
      <h1>The order has been submitted!</h1>
      <p>Thank you for your purchase.</p>
      <a href="/">
        <button>Go Back to Home</button>
      </a>
    </div>
  );
}

export default SubmitPage;
