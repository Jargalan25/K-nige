import styles from "../../component/style.module.css";
import Image from "next/image";
import ImageBorder from "../../component/imageBorder";

export default function chinghisKhaan() {
  return (
    <div className={styles.zohitsuulagch}>
      {ImageBorder()};
      <div
        class={`card border-dark p-3 align-items-center align-content-center justify-content-center; m-1 ${styles.backgroundColor}`}
      >
        <h2 class="card-body">Гарчиг</h2>
        <ol>
          <li>
            <a href="#ugGaral">Уг гарал</a>
          </li>
          <li>
            <a href="#iderNas">Идэр нас</a>
          </li>
          <li>
            <a href="#merged">
              Мэргидийг дарсан ба Хамаг Монголын хаан болсон нь
            </a>
          </li>
          <li>
            <a href="#jamuha">
              Жамуха, Татар, Жүрхин, Тайчуудтай тэмцэлдсэн нь
            </a>
          </li>
          <li href="#baiguulalt">
            <a>Их Монгол Улсыг байгуулсан нь</a>
            <ol>
              <li href="#nutag">
                <a>Нутаг дэвсгэр, цэргийн зохион байгуулалт</a>
              </li>
              <li href="#tur">
                <a>Төрийн байгуулалт</a>
              </li>
            </ol>
          </li>
          <li href="#chingis">
            <a>Чингис хааны хийсэн аян дайнууд</a>
          </li>
          <li href="#uhel">
            <a>Нас нөгцсөн нь</a>
          </li>
          <li href="#nuuts">
            <a>Чингис хааны булшны нууц</a>
          </li>
          <li href="#gerBul">
            <a> Гэр бүл</a>
            <ol>
              <li href="#uvugDeedes">
                <a>Өвөг дээдэс</a>
              </li>
              <li href="#ahDuus">
                <a>Ах дүүс</a>
              </li>
              <li href="#hatad">
                <a> Хатад, татвар</a>

                <ol>
                  <li href="#busad">
                    <a>Бусад хатад</a>
                  </li>
                </ol>
              </li>
              <li href="#huuhed">
                <a>Үр хүүхэд</a>

                <ol>
                  <li>
                    <a href="#huvguud">Хөвгүүд</a>
                  </li>
                  <li href="#ohid">
                    <a>Охид</a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li href="#urlag">
            <a>Урлагийн бүтээлд</a>

            <ol>
              <li href="#kino">
                <a>Баримтат кино</a>
              </li>
              <li href="#uranSaikhan">
                <a> Уран сайхны кино</a>

                <ol>
                  <li href="#tv">
                    <a>Телевизийн олон ангит кинонууд</a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li href="#uzeh">
            <a>Мөн үзэх</a>
          </li>
          <li href="#nom">
            <a>Ном зүй</a>
          </li>
          <li href="#holboos">
            <a>Цахим холбоо</a>с
          </li>
          <li href="#eshlel">
            <a>Эшлэл</a>
          </li>
        </ol>
      </div>
      {/*text oruulah heseg*/}
      <div>
        <div className={styles.fullTextSetup}>
          <h2 id="ugGaral" className={styles.heading}>
            Уг гарал
          </h2>
          <h2 id="iderNas" className={styles.heading}>
            Идэр нас
          </h2>
          <h2 id="merged" className={styles.heading}>
            Мэргидийг дарсан ба Хамаг Монголын хаан болсон нь
          </h2>
        </div>
      </div>
    </div>
  );
}
