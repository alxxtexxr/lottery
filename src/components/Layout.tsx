type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => (
    <div className="bg-gray-100 flex justify-center">
        <div className="flex flex-col bg-white min-h-screen p-4 shadow-xl">
            {children}
        </div>
    </div>
);

export default Layout;