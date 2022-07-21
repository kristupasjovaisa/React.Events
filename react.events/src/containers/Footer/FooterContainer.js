import {useTranslation} from "react-i18next";


const FooterContainer = () => {

    const {t}=useTranslation();
    return (
        <footer>
            <span>
       {t('Copyright')} &copy; {t('Events')}
    </span>
        </footer>
    )
}

export default FooterContainer;