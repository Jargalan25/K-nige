import styles from "../component/style.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Könige</title>
          <link rel="icon" href="/soyombo.png" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          ></link>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          ></link>
        </Head>
        <header
          id="ehlel"
          className={`p-1 text-center align-self-start ${styles.header}`}
        >
          <nav>
            <h2 className="mb-4">Die Geschichte der 10 mongolischen Könige</h2>
          </nav>
        </header>
        <div>
          <main className="background">
            <div className="container justify-content-center align-items-center align-content-center justify-items-center justify-self-center align-self-center p-5">
              {children}
            </div>
            <div
              className={`row flex-column justify-items-center align-items-center m-2 ${styles.posits}`}
            >
              <a
                href="/"
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
              >
                <button
                  type="button"
                  className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-1 ${styles.button}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              </a>
              <a
                href="#ehlel"
                class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
              >
                <button
                  type="button"
                  className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-1 ${styles.button}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class={`bi bi-arrow-up`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </main>
        </div>

        <footer className={styles.footer}>
          Quelle: https://de.wikipedia.org/wiki/Portal:Geschichte
        </footer>
      </div>
      <style jsx>{`
      a {
        color: white;
      }
        .header {
          padding: 10px;
          text-align: center;
          background: brown;
          color: white;
          font-size: 27px;
          position: relative;
          width: 100%;
          z-index: 1;
        }
        .background {
          position: relative;
          width: 100%;
          min-height
          height: 100%;
          justify-content: center;
          align-items: center;
          align-content: center;
          justify-items: center;
        }
        .background:before {
          content: "";
          background-image: url("../background.jpg");
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 20%;
        }
      `}</style>
    </>
  );
}
