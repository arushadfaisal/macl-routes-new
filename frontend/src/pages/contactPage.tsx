
const ContactPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
            <form className="min-w-md max-w-md p-5 mb-4 flex flex-col bg-gray-300 shadow-xl rounded-sm">
                <h1 className="text-4xl font-bold mb-6 self-center">Contact Us</h1>

                <label htmlFor="name" className="text-md font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="mb-4 p-2 
                rounded border border-gray-400 bg-gray-100" placeholder="John Doe" required />

                <label htmlFor="email" className="text-md font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="mb-4 p-2 
                rounded border border-gray-400 bg-gray-100" placeholder="example@domain.com" required />

                <label htmlFor="message" className="text-md font-semibold mb-2">Message</label>
                <textarea id="message" name="message" className="mb-4 p-2 
                rounded border border-gray-400 bg-gray-100" placeholder="Enter your message" required rows={5}></textarea>

                <button type="submit" className="bg-blue-500 mt-5 justify-self-end-safe hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactPage;