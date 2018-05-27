import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const styles = theme => ({
    avatar: {
        backgroundColor: red[500],
    },
    actions: {
        display: 'flex',
    },
});
class ProfileCard extends React.Component {
    state = { 
        expanded: false,
        loggedIn: false,
    };
    
    componentDidMount() {
        if (this.props.token != ""){
            this.state.loggedIn = true;
        }
    }

    render() {
        const { classes } = this.props;
        let bio = "";
        if (this.state.loggedIn === false) {
            return <Link to="">Log in</Link>
        }
        bio = this.props.profile.bio;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Project" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton>
                               <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.username}
                        subheader={this.props.email}
                    />
                    <CardContent>
                        <Typography component="p">
                            {bio}
                            <b />
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Save">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(ProfileCard);