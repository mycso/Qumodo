import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const User = ({ users, searchTerm, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
    <div className="card">
        {users.filter((val) => {
            if (searchTerm === "") {
                return val
            } else if (val.login.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
            }).map((val, results) => {
            return (
            <Card key={results.id}>
                <Image src={val.avatar_url} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{val.login}</Card.Header>
                <br/>
                <br/>
                <a className="title" href={val.html_url} target="_blank" rel="noreferrer">
                    <Icon name='user' />
                    {val.html_url}
                </a>
                </Card.Content>
            </Card>
            );
        })}
    </div>
    );
};

export default User;