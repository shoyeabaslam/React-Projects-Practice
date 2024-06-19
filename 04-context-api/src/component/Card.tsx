import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useContext } from "react";
import { BsCursorFill } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";
const Card = () => {
    const {isDark} = useContext(ThemeContext)

    // Import necessary hooks from framer-motion
    const x = useMotionValue(0); // Initialize motion value for x-axis with an initial value of 0
    const y = useMotionValue(0); // Initialize motion value for y-axis with an initial value of 0

    // Create spring animations for x and y motion values
    const mouseXSpring = useSpring(x); // Apply a spring effect to the x motion value for smooth animation
    const mouseYSpring = useSpring(y); // Apply a spring effect to the y motion value for smooth animation
    // Example: If y = 0.5, the value goes from 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, and gradually comes back to 0.5

    // Create transformations for rotating the element based on the spring values
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
    // Rotate the element around the X-axis based on the y spring value
    // When mouseYSpring is -0.5, rotation is 17.5deg; when mouseYSpring is 0.5, rotation is -17.5deg

    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);
    // Rotate the element around the Y-axis based on the x spring value
    // When mouseXSpring is -0.5, rotation is -17.5deg; when mouseXSpring is 0.5, rotation is 17.5deg

    // Event handler for mouse movement over the element
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        const rect = target.getBoundingClientRect(); // Get the size and position of the element
        const width = rect.width; // Width of the element
        const height = rect.height; // Height of the element
        const mouseX = e.clientX - rect.left; // Mouse X coordinate relative to the element
        const mouseY = e.clientY - rect.top; // Mouse Y coordinate relative to the element
        const xPercentage = (mouseX / width) - 0.5; // Calculate X percentage relative to the center of the element (-0.5 to 0.5)
        const yPercentage = (mouseY / height) - 0.5; // Calculate Y percentage relative to the center of the element (-0.5 to 0.5)
        x.set(xPercentage); // Update x motion value with the calculated X percentage
        y.set(yPercentage); // Update y motion value with the calculated Y percentage
    }

    // Event handler for mouse leaving the element
    const handleMouseOut = () => {
        x.set(0); // Reset x motion value to 0
        y.set(0); // Reset y motion value to 0
    }
    return (
        <motion.div
            onMouseMove={handleMouseMove}
            style={{
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY
            }}
            onMouseOut={handleMouseOut}
            className="w-[250px] h-[300px] border bg-slate-200/20 rounded-lg relative shadow-lg">
            <div style={{ transformStyle: "preserve-3d", transform: 'translateZ(75px)' }} 
            className={`absolute overflow-hidden inset-5 rounded-lg shadow-xl border flex-col ${!isDark?'bg-slate-50':'bg-slate-500'}  flex justify-center items-center`}>
                <h1 className={`text-2xl font-bold flex flex-col space-y-3 ${!isDark?'text-slate-800':'text-slate-50'} items-center select-none`}>
                    <BsCursorFill /><span>HOVER ME</span>
                </h1>
            </div>
        </motion.div>
    )
}

export default Card 