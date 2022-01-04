import Question from "./question"
import { ScrollContainer } from "./content.styles";
import { data } from "/data/data";

const content = ({ name }) => {
    const newData = data[name];
    console.log(data[name]);
    if (!newData) {
        return (
            <div>
                404
            </div>
        )
    }
    return (
        <div>
            <main class="flex-1 overflow-x-hidden bg-gray-200">
                <div class="mx-auto px-6 py-8">
                    <h3 class="text-gray-700 text-3xl font-medium">{name}</h3>

                    <div class="mt-8"></div>

                    <div class="flex h-full w-full flex-col mt-8">
                        <div class="-my-2 py-2 h-full sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <ScrollContainer style={{ height: "75vh" }}
                                class="align-middle inline-block min-w-full shadow overflow-x-hidden sm:rounded-lg border-b border-gray-200">
                                <table class="min-w-full ">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Question</th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Link</th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-md leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Rating</th>
                                            {/* <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Role</th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th> */}
                                        </tr>
                                    </thead>

                                    <tbody class="bg-white h-full">
                                        {newData.map(element => {
                                            return (<Question name={element.Question} link={element.Link} rating={element.Rating} />)
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