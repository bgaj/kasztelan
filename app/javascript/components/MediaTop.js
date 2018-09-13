import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios'

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


class MediaTop extends React.Component {
    state = {
        open: false,
        firstOpen: false,
        fetching: false,
        images: [],
        tab: 0,
        selected: null,
        size: 'url'
    };


    componentDidUpdate(nextProps, nextState){
        if(!nextState.firstOpen && nextState.open != this.state.open ){
            this.setState({firstOpen: false, fetching: true})
            this.loadImages()
        }
    }

    loadImages = () => {
        self = this
        axios.get('/admin/images').then( resp => {
            self.setState({fetching: false, images: resp.data})
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (event, tab) => {
        this.setState({ tab });
    };
    submitDialog = () => {
        const {selected} = this.state
        const { field_name } = this.props
        this.handleClose()
        document.getElementById(field_name).value = selected.id
        document.getElementById('image_insert').src = selected.image.thumb.url
    }
    handleClear = () => {
        const { field_name } = this.props
        document.getElementById(field_name).value = ''
        document.getElementById('image_insert').src = ''
    }

    handleSelect = (image) => {
        this.setState({selected: image})
    }

    submitImageForm = () => {

        const formData = new FormData();
        formData.append('image[image]', document.getElementById('image_image').files[0]);

        axios.post("/admin/images", formData)
            .then(response => {
                this.setState({images: [response.data].concat(this.state.images), tab: 0})
            }).catch(error => {

        });
    }

    render() {
        const { classes } = this.props;
        const { images, editorState, tab, selected } = this.state;
        return (
            <div>
                <Button variant="outlined" size="small" color="primary" onClick={this.handleClickOpen}>Wybierz Zdjęcie</Button>
                <Button variant="outlined" size="small" color="secondary" onClick={this.handleClear}>Usuń zdjęcie</Button>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Multimedia
                            </Typography>
                        </Toolbar>
                        <Tabs value={tab} onChange={this.handleChange}>
                            <Tab label="Media" />
                            <Tab label="Dodaj nowe" />
                        </Tabs>
                    </AppBar>

                    {tab === 0 && <TabContainer>
                        <div className="images">
                            <div className="uk-grid">
                                <div className="uk-width-3-4">
                                    <div className="uk-grid-small uk-grid">
                                        {images.map(image=>{
                                            const active = JSON.stringify(image) === JSON.stringify(selected)
                                            return (
                                                <div onClick={()=>this.handleSelect(image)} className="uk-width-1-5" key={image.id}>
                                                    <div className={`images__box ${active ? 'active' : ''}`}>
                                                        <img src={image.image.thumb.url}/>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="uk-width-1-4">
                                    <h4>Wybrane zdjęcie</h4>
                                    {selected ?
                                        <div className="selected">
                                            <img src={selected.image.thumb.url} />
                                                <Button variant="contained" color='primary' onClick={this.submitDialog}>Wybierz</Button>
                                        </div>
                                        :
                                        "Nie wybrano zdjęcia"}

                                </div>
                            </div>
                        </div>
                    </TabContainer>}
                    {tab === 1 && <TabContainer>
                            <div className="input file required image_image">
                                <label className="file required" htmlFor="image_image">Image</label>
                                <input className="file required" required="required" aria-required="true" type="file" name="image[image]" id="image_image"/>
                            </div>
                        <Button variant="contained" color='primary' onClick={this.submitImageForm}>Wybierz</Button>
                    </TabContainer>}

                </Dialog>
            </div>
        );
    }
}

MediaTop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaTop);
