import { motion } from 'framer-motion';
import { FaShieldAlt, FaReact, FaDatabase, FaChartLine } from 'react-icons/fa';

const programs = [
	{
		title: 'Cybersecurity',
		description:
			'Master the art of digital defense with hands-on experience in ethical hacking, network security, and threat analysis.',
		icon: <FaShieldAlt className="w-8 h-8 text-white" />,
		color: 'rgba(239, 68, 68, 0.2)', // red-500 with alpha
		borderColor: 'rgba(239, 68, 68, 0.5)',
	},
	{
		title: 'Full Stack Development',
		description:
			'Build complete web applications from frontend to backend using modern frameworks and technologies.',
		icon: <FaReact className="w-8 h-8 text-white" />,
		color: 'rgba(59, 130, 246, 0.2)', // blue-500 with alpha
		borderColor: 'rgba(59, 130, 246, 0.5)',
	},
	{
		title: 'Data Science',
		description:
			'Unlock insights from data using machine learning, statistical analysis, and predictive modeling.',
		icon: <FaDatabase className="w-8 h-8 text-white" />,
		color: 'rgba(34, 197, 94, 0.2)', // green-500 with alpha
		borderColor: 'rgba(34, 197, 94, 0.5)',
	},
	{
		title: 'Data Analysis',
		description:
			'Transform raw data into actionable insights with advanced analytics and visualization techniques.',
		icon: <FaChartLine className="w-8 h-8 text-white" />,
		color: 'rgba(249, 115, 22, 0.2)', // orange-500 with alpha
		borderColor: 'rgba(249, 115, 22, 0.5)',
	},
];

const ProgramsSection = () => {
	return (
		<section className="py-20 bg-transparent">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						Choose Your <span className="text-blue-500">Path</span>
					</h2>
					<p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
						Discover our comprehensive internship programs designed to launch your
						career in the most in-demand tech fields.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{programs.map((program, index) => (
						<a href="/programs" key={program.title}>
							<motion.div
								initial={{ opacity: 0, y: 50, scale: 0.9 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.1,
									duration: 0.5,
									ease: 'easeOut',
								}}
								whileHover={{ y: -10, transition: { duration: 0.2 } }}
								className="rounded-2xl p-6 flex flex-col items-start transition-all duration-300"
								style={{
									background: 'rgba(31, 41, 55, 0.5)', // bg-gray-800 with opacity
									border: `1px solid ${program.borderColor}`,
									backdropFilter: 'blur(10px)',
								}}
							>
								<div
									className="p-4 rounded-lg mb-6"
									style={{
										backgroundColor: program.color,
										border: `1px solid ${program.borderColor}`,
									}}
								>
									{program.icon}
								</div>
								<h3 className="text-xl font-bold text-white mb-2">
									{program.title}
								</h3>
								<p className="text-gray-400 text-sm">
									{program.description}
								</p>
							</motion.div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProgramsSection;
