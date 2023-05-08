
import style from './organicStore.module.css';
import OrganicImg1 from "../assets/organicPhoto1.png";
import OrganicImg2 from "../assets/organicPhoto2.png"

function OrganicStore() {
    return (
        <div className={style.bigContainer}>
            <div className={style.organicText}>
                <div className={style.textTittle}>
                    <p>Organic Store Servicies</p>
                </div>
                     <div className={style.text}>
                        <p> t is a long established fact that a reader will be distracted by the readable content of
                         a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less
                         normal distribution of letters, as opposed to using 'Content here, content here', making it
                            look like readable English. <br></br><br></br>Many desktop publishing packages and web page editors now use Lorem
                         Ipsum as their default model text, and auncover many web sites still in their infancy. Various
                         versions have evolved over the years</p>
                     </div>
                           <div className={style.organicStore}>
                               <div className={style.OrganicContainer}>
                                   <div className={style.organicImg}>
                                        <img src={OrganicImg1} />
                                   </div>
                                        <div className={style.OrganicText}>
                                            <div className={style.textContainer}>
                                                <div className={style.textTittle}>
                                                <p>Why Organic</p>
                                                </div>
                                                    <div className={style.text}>
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                                                          page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                                    </div>
                                            </div>
                                        </div>
                               </div>
                                    <div className={style.OrganicContainer}>
                                        <div className={style.OrganicText}>
                                           <div className={style.textContainer}>
                                               <div className={style.textTittle}>
                                                <p>Speciality Produce</p>
                                               </div>
                                                 <div className={style.text}>
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors
                                                          now use Lorem Ipsum as their default model text, and auncover.</p>
                                                 </div>
                                           </div>
                                        </div>
                                              <div className={style.organicImg}>
                                                  <img src={OrganicImg2} />
                                              </div>
                                    </div>
                           </div>
                    <div className={style.landContainer}>
                        <div className={style.landTittle}>
                            <p>We farm your land</p>
                        </div>
                             <div className={style.landText}>
                                 <p>
                                     It is a long established fact that a reader
                                     will be distracted by the readable content of a
                                     page when looking a layout. The point of using Lorem Ipsum
                                     is that it has a more-or-less normal distribution of letters,
                                     as opposed to using 'Content here, content here', making it look like readable English.
                                 </p>
                             </div>
                    </div>
                                   <div className={style.smallContainer}>

                                            <div className={style.container}>
                                                  <div className={style.inside}>
                                                       <div className={style.number}>
                                                           <p>01</p>
                                                       </div>
                                                             <div className={style.containerTittle}>
                                                                 <p>Best quality support</p>
                                                             </div>
                                                  </div>
                                            </div>
                                                <div className={style.container}>
                                                    <div className={style.inside}>
                                                        <div className={style.number}>
                                                            <p>02</p>
                                                        </div>
                                                        <div className={style.containerTittle}>
                                                            <p>Money back guarantee</p>
                                                        </div>
                                                    </div>
                                                </div>

                                   </div>
            </div>
        </div>
    );
}

export default OrganicStore;