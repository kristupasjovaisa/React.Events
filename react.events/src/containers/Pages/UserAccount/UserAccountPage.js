import { Card, ListGroup} from "react-bootstrap";
import EventList from "../../../components/EventList/EventList";
import {useTranslation} from "react-i18next";

const UserAccountPage = () => {
    const {t}=useTranslation();

    return (
        <>
            <div className='mainUser mt-4'>
                <Card className='cardUser'>
                    <Card.Header as="h5">{t('My Profile')}</Card.Header>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><Card.Title>{t('Nickname')}:</Card.Title> {'Petras'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>{t('City')}:</Card.Title> {'Kaunas'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>{t('Email')}:</Card.Title> {'petras@gmail.com'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>{t('Phone number')}:</Card.Title> {'8652222325'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>{t('My Events')}:</Card.Title> {'8'}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
            <div className='accountLine'></div>
            <h3 className='text about mt-4'>{t('My Events')}</h3>
            <EventList/>
        </>
    );

}
export default UserAccountPage;