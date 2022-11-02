import React, { useState, useRef } from 'react'
import Box from './Box'

export default function Bmi() {
    const [data, setData] = useState([])
    const handleInputChange = (e) => {
        setData([{height: e.target.height.value, weight: e.target.weight.value}])
    }

      

        // this.state = { height: 0, weight: 0, };
        // this.heightChange = this.heightChange.bind(this);
        // this.weightChange = this.weightChange.bind(this);
        // this.submitMe = this.submitMe.bind(this);
        // this.calculateBMI co= this.calculateBMI.bind(this);
    // const heightChange(e) {
    //     this.setState({ height: e.target.value });
    //     e.preventDefault();
    // }

    // const weightChange(e) {
    //     this.setState({ weight: e.target.value });
    //     e.preventDefault()
    // }

    // calculateBMI() {
    //     let heightSquared = (this.state.height / 100 * this.state.height / 100);
    //     let bmi = this.state.weight / heightSquared;
    //     let low = Math.round(18.5 * heightSquared);
    //     let high = Math.round(24.99 * heightSquared);
    //     let message = "";
    //     if (bmi >= 18.5 && bmi <= 24.99) {
    //         message = "You are in a healthy weight range";
    //     }
    //     else if (bmi >= 25 && bmi <= 29.9) {
    //         message = "You are over-weight";
    //     }
    //     else if (bmi >= 30) {
    //         message = "You are Obese";
    //     }
    //     else if (bmi < 18.5) {
    //         message = "You are under-weight";
    //     }
    //     this.setState({ message: message });
    //     this.setState({ optimalWeight: "Your suggested weight range is between " + low + " - " + high })
    //     this.setState({ bmi: "Your BMI is: " + Math.round(bmi * 100) / 100 });


    // }


    // submitMe(e) {
    //     e.preventDefault();
    //     this.calculateBMI();
    // }

        let names = ['Ibrahim', 'Dua', 'Ahmad', 'Manar', 'Omar']

        return (
            <>
                <div className="p-4 bg-touch mx-auto w-full max-w-sm rounded-lg border border-gray-400 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={this.submitMe}>
                        <h1 className="text-xl font-medium text-gray-50 dark:text-white">Calculate Your BMI</h1>
                        <div>
                            <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300">Your Height</label>
                            <input name="height" value={this.state.height} onChange={handleInputChange} type="number" id="height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Centimeters" required />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300">Your Weight</label>
                            <input name="weight" value={this.state.weight} onChange={handleInputChange} type="number" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Kilograms" required />
                        </div>

                        <button type="submit" value="submit" className="w-40 text-black bg-yellow-300 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>

                    </form>
                    {this.state.bmi ? <Box bmi={this.state.bmi} message={this.state.message} optimalWeight={this.state.optimalWeight} /> : null}
                </div>



            </>
        )
    
        }
