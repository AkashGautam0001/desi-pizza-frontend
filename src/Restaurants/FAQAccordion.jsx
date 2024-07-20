import { useState } from "react";

const faqs = [
	{
		question: "What are your restaurant hours?",
		answer: "We are open from 11:00 AM to 10:00 PM every day of the week.",
	},
	{
		question: "Do you offer vegetarian or vegan options?",
		answer: "Yes, we have a variety of vegetarian and vegan dishes available. Please check our menu for details.",
	},
	{
		question: "Can I make a reservation?",
		answer: "Yes, you can make a reservation through our website or by calling us directly at (123) 456-7890.",
	},
	{
		question: "Do you offer takeout or delivery?",
		answer: "Yes, we offer both takeout and delivery services. You can place an order via our website or by phone.",
	},
	{
		question: "Is there parking available?",
		answer: "Yes, we have a dedicated parking lot for our customers. Additional street parking is also available.",
	},
	{
		question: "Do you accommodate large parties or events?",
		answer: "Yes, we can accommodate large parties and events. Please contact us to discuss your needs and make arrangements.",
	},
	{
		question: "Do you have a dress code?",
		answer: "We have a casual dress code. We recommend smart-casual attire for a comfortable dining experience.",
	},
	{
		question: "Are reservations required?",
		answer: "Reservations are not required but are recommended, especially during peak hours",
	},
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
	<div className="border-b border-gray-700">
		<button
			onClick={onClick}
			className="flex w-full items-center justify-between py-4 text-left text-xl font-semibold text-white hover:bg-gray-800 focus:outline-none"
		>
			{question}
			<svg
				className={`w-6 h-6 transition-transform ${
					isOpen ? "rotate-180" : "rotate-0"
				}`}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</button>
		{isOpen && <div className="pt-4 pb-2 text-gray-200">{answer}</div>}
	</div>
);

const FAQAccordion = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="mx-auto max-w-7xl px-2 py-10 md:px-0 ">
			<div>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
						Frequently Asked Questions
					</h2>
				</div>
				<div className="mx-auto mt-8 max-w-3xl px-3">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() => handleClick(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQAccordion;
