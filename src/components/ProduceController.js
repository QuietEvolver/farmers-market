import React from "react";
import ProduceDisplay from'./ProduceDisplay';

const availableProduce = [ { month: "January", selection: [ "Apples", "Hazelnuts", "Pears", "Garlic", "Mushrooms", "Onions", "Potatoes", "Turnips" ] }, { month: "February", selection: [ "Apples", "Hazelnuts", "Pears", "Garlic", "Mushrooms", "Onions", "Potatoes" ] }, { month: "March", selection: [ "Apples", "Hazelnuts", "Pears", "Rhubarb", "Garlic", "Mushrooms", "Onions", "Potatoes" ] }, { month: "April", selection: [ "Apples", "Hazelnuts", "Pears", "Rhubarb", "Asparagus", "Garlic", "Lettuce", "Mushrooms", "Onions", "Potatoes" ] }, { month: "May", selection: [ "Apples", "Hazelnuts", "Pears", "Rhubarb", "Asparagus", "Cauliflower", "Garlic", "Lettuce", "Potatoes", "Radishes" ] }, { month: "June", selection: [ "Apples", "Hazelnuts", "Pears", "Rhubarb", "Blackberries", "Cherries", "Raspberries", "Strawberries", "Asparagus", "Broccoli", "Cauliflower", "Kohlrabi", "Lettuce", "Mushrooms", "Potatoes", "Radishes", "Squash" ] }, { month: "July", selection: [ "Apples", "Hazelnuts", "Pears", "Rhubarb", "Apricots", "Blackberries", "Blueberries", "Cherries", "Melons", "Nectarines", "Peaches", "Raspberries", "Strawberries", "Tomatoes", "Beets", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Potatoes", "Radishes", "Squash", "Turnips" ] }, { month: "August", selection: [ "Apples", "Apricots", "Blackberries", "Blueberries", "Cherries", "Melons", "Nectarines", "Peaches", "Pears", "Plums", "Raspberries", "Rhubarb", "Strawberries", "Tomatoes", "Beets", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Corn", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Onions", "Peas", "Peppers", "Potatoes", "Radishes", "Squash", "Turnips" ] }, { month: "September", selection: [ "Apples", "Blueberries", "Grapes", "Melons", "Peaches", "Pears", "Plums", "Raspberries", "Tomatoes", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Corn", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Onions", "Peas", "Peppers", "Potatoes", "Radishes", "Squash", "Turnips" ] }, { month: "October", selection: [ "Apples", "Grapes", "Hazelnuts", "Melons", "Peaches", "Pears", "Tomatoes", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Corn", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Onions", "Peas", "Peppers", "Potatoes", "Pumpkins", "Radishes", "Squash", "Turnips" ] }, { month: "November", selection: [ "Apples", "Hazelnuts", "Pears", "Broccoli", "Carrots", "Cauliflower", "Garlic", "Mushrooms", "Onions", "Potatoes", "Squash", "Turnips" ] }, { month: "December", selection: [ "Apples", "Hazelnuts", "Pears", "Broccoli", "Carrots", "Cauliflower", "Garlic", "Mushrooms", "Onions", "Potatoes", "Turnips" ] } ];

const getSelectionForMonth = month => availableProduce.filter(monthSelection => monthSelection.month === month)[0];

class ProduceController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: "April"
    };
  }

  handleSelect = (e) => {
    this.setState(() => ({
      selectedMonth: e.target.value
    }));
  }

  render() {
    const monthData = getSelectionForMonth(this.state.selectedMonth);
    return (
      <React.Fragment>
        <select name="month" className="month-select" onChange={this.handleSelect}>
        <option value="">--Please choose a month--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <ProduceDisplay 
          month={monthData.month}
          selection={monthData.selection}
        />
      </React.Fragment>
    );
  }

} 

export default ProduceController;