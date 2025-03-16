import Image from "next/image";
import styles from "./style.module.css";

function ImageBorder(props) {
  return (
    <div className={`card p-3 border-dark ${styles.backgroundColor}`}>
      <Image
        src={"/chingis.jpeg"}
        class="card-img-top"
        alt={"chingis"}
        width={210}
        height={270}
      />

      <table class="card-body m-1">
        <tr>
          <th>Хаанчлал</th>
          <td>dhsafjsdajlkgfdjskghjdsaghajdlshgljkahgkjldhjkaghjkdhfdsa</td>
        </tr>
        <tr>
          <th>Хаан суусан</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Бүтэн нэр</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Төрсөн огноо</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Төрсөн газар</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Өнгөрсөн огноо</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Өнгөрсөн газар</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Оршуулсан газар</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Удаах хаан</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Их хатан</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Хатад</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Хүүхдүүд</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Эцэг</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Эх</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Улс</th>
          <td>Lastname</td>
        </tr>
        <tr>
          <th>Ургийн овог</th>
          <td>Lastname</td>
        </tr>
      </table>
    </div>
  );
}

export default ImageBorder;
