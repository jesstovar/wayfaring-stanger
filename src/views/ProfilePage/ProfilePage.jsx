import React from "react";
//import { Modal} from 'react-bootstrap';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
      , formData: {
        name: ''
        , location: ''
        , miles: ''
        , imageUrl: ''
      }
      , editMode: false
      , active: 0

    }
    this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this)
    this.onSave = this.onSave.bind(this)
    this.editEntry = this.editEntry.bind(this)
  }


  inputOnChangeHandler(event) {
    //debugger;
    const target = event.target;
    const name = target.name;
    const value = target.value;
    //debugger;
    this.setState(prevState => {
      const newFormData = { ...prevState.formData, [name]: value };
      return { formData: newFormData };
    });
  }

  onSave(event, active) {
    //debugger;
    const oldState = { ...this.state.formData };
    this.setState({
      data: this.state.data.concat([oldState])
      , active: 1
    })

/*          if (this.state.active === 1) {
          this.setState({
            active: 0
          })
        }
        else {
          this.setState({
            active: 1
          })
        } 
 */
  }

  editEntry(event, active, prevProps) {
    //1 -start editing by populating info inside form on tab1
    //change tab
    //2 - item index/id being invisablity set
    //debugger;
    if (prevProps !== this.props) {
      this.setState({
        name: this.props.name,
        active: 0
      })
      console.log("edit was clicked")
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    const list = this.state.data ? (
      this.state.data.map((item, i) => (
        <GridItem xs={12} sm={12} md={4} key={[i]}>
          <i className={"fab fa fa-edit"} onClick={(event) => this.editEntry(event, 0)} />
          <p>Trail Name:  {item.name}</p>
          <p>Trail Location:  {item.location}</p>
          <p>Miles Traveled: {item.miles}</p>
          <img
            alt="..."
            src={item.imageUrl}
            className={navImageClasses}
          />
        </GridItem>
      ))
    ) : (
        <React.Fragment />
      );
    return (
      <div>
        <Header
          color="transparent"
          brand="Wayfaring Stranger"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Lon Milk</h3>
                      <h6>Adventurer</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    active={this.state.active}
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Add Destination",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                              <form>
                                <div className="form-group">
                                  <label
                                    className="col-sm-3 control-label"
                                    htmlFor="name"
                                    id="nameLabel"
                                  >
                                    Trail Name&nbsp;&nbsp;
                        </label>
                                  <input
                                    label="Trail Name"
                                    id="float"
                                    name="name"
                                    type="text"
                                    value={this.state.formData.name}
                                    onChange={this.inputOnChangeHandler}
                                  />
                                </div>
                              </form>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <label
                                className="col-sm-3 control-label"
                                htmlFor="name"
                                id="nameLabel"
                              >
                                Trail Location&nbsp;&nbsp;
                        </label>
                              <input
                                label="Trail Location"
                                id="float"
                                name="location"
                                type="text"
                                value={this.state.formData.location}
                                onChange={this.inputOnChangeHandler}
                              />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={6}>
                              <label
                                className="col-sm-3 control-label"
                                htmlFor="miles"
                                id="milesLabel"
                              >
                                Miles Traveled&nbsp;&nbsp;
                        </label>
                              <input
                                label="Miles Traveled"
                                id="float"
                                name="miles"
                                type="text"
                                value={this.state.formData.miles}
                                onChange={this.inputOnChangeHandler}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <label
                                className="col-sm-3 control-label"
                                htmlFor="imageUrl"
                                id="imageUrlLabel"
                              >
                                Image Url&nbsp;&nbsp;
                        </label>
                              <input
                                label="Image Url"
                                id="float"
                                name="imageUrl"
                                type="text"
                                value={this.state.formData.imageUrl}
                                onChange={this.inputOnChangeHandler}
                              />
                            </GridItem>
                            <div style={{ "margin": "auto", "padding": "50px" }}>
                              <Button color="primary" round
                                onClick={(event) => this.onSave(event, 1)}>
                                Click to archive your journey
                              </Button>
                            </div>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Your Destinations",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            {list}
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
