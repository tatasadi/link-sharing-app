export default async function DemoNotice() {
    return (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative sm:max-w-[27rem] mx-4 sm:mx-0 text-xs" role="alert">
            <strong className="font-bold">Demo Notice:</strong>
            <span className="block sm:inline"> This website is a demonstration project and is not intended for production use. All data displayed and functionalities provided are for evaluation and testing purposes only. Do not use this site to process or store sensitive or personal information.</span>
            <span className="block sm:inline"> Use of this website is at your own risk. We make no warranties regarding uptime, data security, or reliability. By proceeding, you agree that the developers, contributors, and associated organizations are not liable for any damages arising from use of this demo site. </span>
        </div>
    )
}