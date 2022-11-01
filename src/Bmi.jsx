import React, { Component } from 'react'
import Box from './Box'

export default class Bmi extends Component {
    constructor(props) {
        super(props)

        this.state = { height: 0, weight: 0, };
        this.heightChange = this.heightChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.submitMe = this.submitMe.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }
    heightChange(e) {
        this.setState({ height: e.target.value });
        e.preventDefault();
    }

    weightChange(e) {
        this.setState({ weight: e.target.value });
        e.preventDefault()
    }

    calculateBMI() {
        let heightSquared = (this.state.height / 100 * this.state.height / 100);
        let bmi = this.state.weight / heightSquared;
        let low = Math.round(18.5 * heightSquared);
        let high = Math.round(24.99 * heightSquared);
        let message = "";
        if (bmi >= 18.5 && bmi <= 24.99) {
            message = "You are in a healthy weight range";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            message = "You are over-weight";
        }
        else if (bmi >= 30) {
            message = "You are Obese";
        }
        else if (bmi < 18.5) {
            message = "You are under-weight";
        }
        this.setState({ message: message });
        this.setState({ optimalWeight: "Your suggested weight range is between " + low + " - " + high })
        this.setState({ bmi: "Your BMI is: " + Math.round(bmi * 100) / 100 });

    }

    submitMe(e) {
        e.preventDefault();
        this.calculateBMI();
    }

    render() {
        return (
            <>
                <div class="p-4 bg-orange-500 mx-auto w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form class="space-y-6" onSubmit={this.submitMe}>
                        <h1 class="text-xl font-medium text-gray-900 dark:text-white">Calculate Your BMI</h1>
                        <div>
                            <label htmlFor="height" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Height</label>
                            <input name="height" value={this.state.height} onChange={this.heightChange} type="number" id="height" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Centimeters" required />
                        </div>
                        <div>
                            <label htmlFor="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Weight</label>
                            <input name="weight" value={this.state.weight} onChange={this.weightChange} type="number" id="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Kilograms" required />
                        </div>

                        <button type="submit" value="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>

                    </form>
                {this.state.bmi ? <Box bmi={this.state.bmi} message={this.state.message} optimalWeight={this.state.optimalWeight} /> : null}
                </div>


            </>
        )
    }
}
