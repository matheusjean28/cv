import { useState } from "react";
import './Styles/utils.css'
import StylesAboutMe from "./Styles/StylesAboutMe"
export default function AboutMe() {
    const { divStl, BntStl, PStl } = StylesAboutMe;
    const [BtnMore, setBtnMore] = useState(false)

    const handleBtn = () => {
        setBtnMore(!BtnMore)}
        
    return (
        <>
            <div style={divStl} className="divStl">
                <h3>Um Pouco Sobre MIM</h3>
                {BtnMore && <p className="PStl" style={PStl}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptatibus natus eos similique eaque et ad repellat. Nostrum asperiores cum at nemo eveniet optio officiis inventore tenetur nam, quod esse!
                    Natus fuga nesciunt minus? Recusandae, consequuntur voluptate? Minus, aliquam. Vitae, tempora rerum. Hic cumque exercitationem doloribus incidunt a corrupti sed, nulla accusantium facere neque. Vero doloremque vel asperiores officiis odit?
                    Debitis deserunt labore quisquam voluptate commodi repellat a omnis. Pariatur facere perferendis debitis ipsam adipisci sequi reprehenderit quos magnam, quas harum sint neque delectus esse velit facilis assumenda quisquam aperiam?
                </p>}
                <button
                onClick={handleBtn}
                    className={BtnMore ? "btnHeigth" : ""}
                    style={BntStl}>{"Ver Mais > "}</button>
            </div>
        </>
    )
}