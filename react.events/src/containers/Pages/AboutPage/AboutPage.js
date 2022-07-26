import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t}=useTranslation();
    return (
        <>
            <div>
                <h3 className='text about mt-4'>{t('About us')}</h3>
                <p className='text mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis
                    cum eveniet excepturi explicabo laudantium minima mollitia, necessitatibus nisi obcaecati
                    praesentium quasi quod ratione tempora veritatis voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis cumque doloribus ea in
                    maiores obcaecati saepe sunt! Id, quae, quibusdam. Laboriosam minima nihil omnis quam sequi soluta!
                    Atque, nemo.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis
                    cum eveniet excepturi explicabo laudantium minima mollitia, necessitatibus nisi obcaecati
                    praesentium quasi quod ratione tempora veritatis voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis cumque doloribus ea in
                    maiores obcaecati saepe sunt! Id, quae, quibusdam. Laboriosam minima nihil omnis quam sequi soluta!
                    Atque, nemo.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consequuntur corporis
                    cum eveniet excepturi explicabo laudantium minima mollitia, necessitatibus nisi obcaecati
                    praesentium quasi quod ratione tempora veritatis voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis cumque doloribus ea in
                    maiores obcaecati saepe sunt! Id, quae, quibusdam. Laboriosam minima nihil omnis quam sequi soluta!
                    Atque, nemo.
                </p>
            </div>
        </>
    );
};

export default AboutPage;