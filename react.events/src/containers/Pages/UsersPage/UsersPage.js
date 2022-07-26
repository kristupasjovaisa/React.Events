import {Button, Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const UsersPage = () => {
    const usersList = useSelector((state) => state.users.value)
    const {t}=useTranslation();
    return (
        <>
            <div className='mainUser mt-4'>
                <h3 className='text about mt-4'>{t('All users')}</h3>
                {usersList.map((user) => {
                        return (
                                <Card className='cardUser mt-4'>
                                    <Card.Header as="h5">{t('Full info about user')}</Card.Header>
                                    <Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><Card.Title>{t('Nickname')}:</Card.Title> {user.nickname}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>{t('City')}:</Card.Title> {user.city}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>{t('Email')}:</Card.Title> {user.email}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>{t('Phone number')}:</Card.Title> {user.phoneNumber}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>{t('Have events')}:</Card.Title> {'0'}
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <Button className='button' variant="outline-danger" size='sm'>{t('Delete')}</Button>{' '}
                                    </Card.Body>
                                </Card>
                        )
                    }
                )}
            </div>
        </>
    );
};

export default UsersPage;