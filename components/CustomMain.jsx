import React, { Component, PropTypes } from 'react';
import AvatarSimple from '../components/AvatarSimple';
import SelectFieldSimple from '../components/SelectFieldSimple';

import * as t from 'material-ui/Tabs';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import {
	    Icon, 
        Textfield, 
		IconButton, 
		Grid, 
		Cell, 
		Chip,
		Card,
		CardText,
		CardTitle,
		//CardActions,
		CardMenu,
		Button,
		Menu,
		MenuItem
} from 'react-mdl';

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 0,
    width: '100%'
  },
  chip: {
    margin: 4
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

var contactsArray = [
  {
    name: 'Mary Margaret Blanchard',
    phone: '555-1234',
    email: 'snowwhite@ouatmail.com',
    address: '945 N. Storybrook Ln',
    image: 'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg',
    isActive: true
  }, 
  {
    name: 'David Nolan',
    phone: '555-9876',
    email: 'princecharming@ouatmail.com',
    address: '945 N. Storybrook Ln',
    image: 'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg',
    isActive: false
  },
  {
    name: 'Emma Swan',
    phone: '555-2345',
    email: 'thesavior@ouatmail.com',
    address: '693 N. Storybrook Ln',
    image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg',
    isActive: false
  },
  {
    name: 'Regina Mills',
    phone: '555-6667',
    email: 'evilqueen@ouatmail.com',
    address: '1313 E. Mayor St',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg',
    isActive: false
  }, 
  {
    name: 'Mr. Gold',
    phone: '555-4653',
    email: 'rumplestiltskin@ouatmail.com',
    address: '101 N. Main St',
    image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
    isActive: false
  },
  {
    name: 'Bryan Cranston',
    phone: '555-4653',
    email: 'rumplestiltskin@ouatmail.com',
    address: '101 N. Main St',
    image: 'images/pic.png',
    isActive: true
  },
  {
    name: 'Aaron Paul',
    phone: '555-4653',
    email: 'rumplestiltskin@ouatmail.com',
    address: '101 N. Main St',
    image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
    isActive: false
  },
  {
    name: 'Bob Odenkirk',
    phone: '555-4653',
    email: 'rumplestiltskin@ouatmail.com',
    address: '101 N. Main St',
    image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
    isActive: false
  }
];

class CustomMain extends Component {
	constructor(props){
		super(props);
		let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
		flag = width>769? true:false;
		
		//alert (flag)
		this.state = {
			value: 1,
			//displayGrid: flag,
			displayCard: true,
			disabledFlag: true,
			persons: contactsArray,
			person: contactsArray[0]
	    };

		this.updateDimensions = this.updateDimensions.bind(this);
		//this.updatePerson = this.updatePerson.bind(this);		
	}

	updateDimensions() {
		let w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
			this.setState({ width: width });    
	}
	
	updatePerson(e) {
		this.setState({ person: e.target.value,
						persons: this.state.persons,
						value: this.state.value,
						displayCard: this.state.displayCard,
						disabledFlag: this.state.disabledFlag
						});    
	}
  
    /**
   * Add event listener
   */
    componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
	
  }

  /**
   * Remove event listener
   */
    componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
	
  }
  
    handleChange = (event, index, value) => this.setState({value: value});

  render() {
	const showGrid = {
	'display': this.state.displayGrid ? 'flex' : 'none'
	} 

	const showCard = {
	'display': this.state.displayCard ? 'flex' : 'none',
	margin:'auto',
	float: 'left'
	} 

	const showForm = () => {
		let w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
		//alert (this.state.width < 769);
		if (this.state.width < 769){ 
		this.setState({displayGrid: !this.state.displayGrid, displayCard: this.state.displayGrid});	
		}  
	}
	
	const disabledForm = () => {		
		this.setState({disabledFlag: !this.state.disabledFlag});			 
	}
    
	return (
    <div> 
	<Card id="maxsize" shadow={0} style={showCard}>
		<CardTitle style={{color: '#fff', height: '48px', backgroundColor: 'rgb(92, 106, 192)'}}><Textfield
						onChange={() => {}}
						label="Expandable Input"
						expandable
						expandableIcon="search"
						style={{width:'200px', paddingTop: '10px'}}
					/></CardTitle>
		<CardText style={{height: '610px', overflowY: 'scroll'}}>
			<AvatarSimple persons={this.state.persons} update={this.updatePerson.bind(this)}/>
		</CardText>

		<CardMenu style={{color: '#fff',position: 'absolute', right: '0px', top: '0px'}}>
			<IconButton className="muidocs-icon-custom-sort" name=""  style={{top: '4px'}}/>
			<IconButton name="filter_list" style={{top: '5px'}} onClick={showForm}/>
			<Chip style={styles.chip}>9999</Chip>	
			<IconButton name="more_vert" id="demo-menu-lower-right" style={{top: '5px'}}/>
			<Menu target="demo-menu-lower-right" align="right">
				<MenuItem>Some Action</MenuItem>
				<MenuItem disabled>Disabled Action</MenuItem>
			</Menu>
		</CardMenu>
	</Card>
	
	<Grid className="fadeshow" >

		<Cell col={8} style={{width: '100%'}}>
		<t.Tabs>
				<t.Tab icon={<Icon name="person" />} style={{backgroundColor: 'rgb(92, 106, 192)', height:'inherit'}} >
				  <div style={{padding: '0px 0px 0px 10px'}}>
					<h2 style={styles.headline}><IconButton name="filter_list" style={{top: '5px'}} onClick={showForm}/>Employee Management
						
					</h2>
						<Grid style={{margin: '0px'}}>
							<Cell col={4} style={{width: 'calc(50%)'}}>							
								<div className="mdl-avatar mdl-js-avatar mdl-avatar--floating-label" >
									<input className="mdl-avatar__input" type="text" name="profile_image" id="profile_image" value="images/pic.png" onChange={() => {}}/>
									<label className="mdl-avatar__label" htmlFor="profile_image"><IconButton name="add_a_photo" /></label>
								</div>

								<Textfield
									onChange={() => {}}
									label="Text..."
									floatingLabel
									style={{width: '300px'}}
									disabled={this.state.disabledFlag}
								/>
								
								<Textfield
									onChange={() => {}}
									pattern="-?[0-9]*(\.[0-9]+)?"
									error="Input is not a number!"
									label="Number..."
									floatingLabel
									disabled={this.state.disabledFlag}
								/>
								
								<Textfield
									onChange={() => {}}
									label="Text lines..."
									rows={3}
									style={{width: '300px'}}
									floatingLabel
									disabled={this.state.disabledFlag}
								/>

							</Cell>
						<Cell col={4} style={{width: 'calc(50%)'}}>
											<TextField
											  hintText="Hint Text"
											  floatingLabelText="Fixed Floating Label Text"
											  floatingLabelFixed={true}
											  
											  disabled={this.state.disabledFlag}
											/>

								<SelectFieldSimple />
								<DatePicker hintText="Portrait"  floatingLabelText="Ranged Date Picker" disabled={this.state.disabledFlag}/>
								
								<Button raised colored ripple onClick={disabledForm}>Edit</Button>
							</Cell>	
						</Grid>	
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="history" />} >
				  <div>
					<h2 style={styles.headline}>Employement History</h2>
					<p>
					  This is another example tab. 
					</p>

				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="grade" />} >
				  <div>
					<h2 style={styles.headline}>Grade History</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="people" />} >
				  <div>
					<h2 style={styles.headline}>Family Members</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="home" />} >
				  <div>
					<h2 style={styles.headline}>Addresses</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="person_pin" />} >
				  <div>
					<h2 style={styles.headline}>Office Location</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
			  </t.Tabs>
		
		</Cell>
	</Grid>
	</div>
    );
  }
}




CustomMain.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default CustomMain;
