import "./styles.css";

export default function App() {
  return (
    <div class="footer-dark">
      <div id="contactenos" class="section-two">
        <h4>Dejanos tu mensaje</h4>

        <form
          id="contact_form"
          action="#"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class="row">
            <label class="required" for="name">
              Tu nombre:
            </label>
            <br />
            <input
              class="form_input input"
              id="name"
              name="name"
              type="text"
              value=""
              size="30"
            />
            <br />
            <span id="name_validation" class="error_message"></span>
          </div>
          <div class="row">
            <label class="required" for="email">
              tu email:
            </label>
            <br />
            <input
              class="form_input input"
              id="email"
              name="email"
              type="text"
              value=""
              size="30"
            />
            <br />
            <span id="email_validation" class="error_message"></span>
          </div>
          <div class="row">
            <label class="required" for="message">
              tu mensaje:
            </label>
            <br />
            <textarea id="message" name="message" rows="7" cols="30"></textarea>
            <br />
            <span id="message_validation" class="error_message"></span>
            <button class="enviar">Enviar</button>
          </div>
        </form>

        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <p>Nahuel Velazquez/Tamara Nuñez/Franco Duarte</p>
            </div>
          </div>
        </div>

        <p class="copyright">Creado Para MATEA 2022</p>
      </div>
    </div>
  );
}
