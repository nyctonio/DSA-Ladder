import Question from "./question"
import { ScrollContainer } from "./content.styles";
import { data } from "/data/data";
import { useState } from 'react';

const content = ({ name }) => {
    const [count, setcount] = useState(0);
    const newData = data[name];
    const changeCount = () => {
        setcount(count + 1);
    }
    // console.log(data[name]);
    if (!newData) {
        return (
            <div style={{ height: '90vh' }} className="flex justify-center items-center w-full ">
                404 - coming soon....
            </div>
        )
    }
    return (
        <div>
            <main className="flex-1 overflow-x-hidden bg-gray-200">
                <div className="mx-auto px-6 py-8">
                    <h3 className="text-gray-700 text-3xl font-medium">{name}</h3>
                    <div className="mt-8"></div>
                    <div className="flex h-full w-full flex-col mt-8">
                        <div className="-my-2 py-2 h-full sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <ScrollContainer className="overflow-x-scroll" style={{ height: "73vh" }}
                                className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
                                <table className="min-w-full text-md">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Sno</th>
                                            <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Question</th>
                                            <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Link</th>
                                            <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Rating</th>
                                            {/* <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Role</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white h-full">
                                        {newData.map((element, index) => {
                                            return (<Question sno={index + 1} name={element.Question} link={element.Link} rating={element.Rating} />)
                                        })}
                                    </tbody>
                                </table>
                            </ScrollContainer>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default content;