import React from "react";
// import ApiCall from "./ApiCall";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      {/*Api Call Below  */}
      {/* <ApiCall /> */}
      <div className={styles.about}>
        <h1>The Generics</h1>
      </div>
      <div className={styles["container"]}>
        <h2>About</h2>
        <div className="row w-100">
          <div className="col-1 w-50">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
              alt="heroimg"
              srcset=""
            />
          </div>
          <div className="col-1 w-50 p-4 fs-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              beatae commodi velit rem delectus. Accusamus inventore aperiam
              molestias voluptas amet hic maiores id earum eum libero ex
              voluptates natus porro magnam, tempore ut aliquam optio iure
              dolore velit reprehenderit illum ullam quos qui! Facilis dicta
              incidunt tenetur quidem, ratione architecto eos provident
              inventore nulla! Iure accusamus vel quam iste voluptate!
              inventore nulla! Iure accusamus vel quam iste voluptate!
              inventore nulla! Iure accusamus vel quam iste voluptate!
              inventore nulla! Iure accusamus vel quam iste voluptate!
              inventore nulla! Iure accusamus vel quam iste voluptate!
              inventore nulla! Iure accusamus vel quam iste voluptate!
              Cupiditate molestias quisquam dolorum facere dolor aperiam quod
              voluptas voluptatum minima repellendus. Illum sequi id eaque
              voluptas voluptatum minima repellendus. Illum sequi id eaque
              voluptas voluptatum minima repellendus. Illum sequi id eaque
              voluptatum. Cumque itaque labore earum blanditiis perferendis ad?
              voluptatum. Cumque itaque labore earum blanditiis perferendis ad?
              Autem natus, doloremque cumque pariatur explicabo dolores, labore
              deserunt odit, quidem voluptate animi dolorem! Commodi, maxime.
            </p>
          </div>
        </div>
        <p className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis,
          distinctio totam blanditiis eos maxime voluptate adipisci vitae
          repellat nam, ipsam amet. Autem distinctio aliquam at excepturi harum
          magnam nihil aspernatur blanditiis. Dolorem omnis laborum voluptatibus
          nisi provident voluptas enim beatae corporis necessitatibus,
          voluptatum dignissimos cum optio sunt repellendus doloribus vitae
          ratione ipsa consequatur laboriosam numquam amet? Assumenda mollitia
          minus dolore perspiciatis! Hic harum delectus tempora pariatur, nulla
          Tenetur amet quas maiores aliquam consequatur eius nam beatae ducimus
          </p>
      </div>
    </div>
  );
};

export default About;
