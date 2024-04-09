
const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">

        <form className="backdrop-blur-sm rounded-lg bg-white/30 p-10 w-[400px]">
            <div className="flex w-full justify-between my-6">
                <label>Name</label>
                <input type='text' className="bg-transparent border border-gray-900 outline-none"/>
            </div>
            <div className="flex w-full justify-between my-6">
                <label>Email</label>
                <input type='eamil' className="bg-transparent border border-gray-900 outline-none"/>
            </div>
            <div className="flex w-full justify-between my-6">
                <label>Message</label>
                <textarea rows={3} className="bg-transparent w-[57%] border border-gray-900 outline-none"></textarea>
            </div>
        </form>

    </div>
  )
}

export default Contact