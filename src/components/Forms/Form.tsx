import React, { useState } from 'react'
import PasseEscolar from './PasseEscolar';
import PasseLivre from './PasseLivre';

export default function Form() {
    const [selectedForm, setSelectedForm] = useState<string | null>();

    return (
        <section className='border rounded-lg shadow-lg flex flex-col flex-wrap w-full max-w-[50rem] p-6 bg-gray-200'>
            <header className='flex flex-col'>
                <div className="flex justify-center gap-10">
                    <div>
                        <button className={`text-lg text-center my-3 ${selectedForm === 'escolar' ? 'border-b border-gray-700 font-bold' : 'border-b border-gray-700'
                            }`}
                            onClick={() => setSelectedForm('escolar')}>Passe Escolar</button>
                    </div>

                    <div>
                        <button className={`text-lg text-center my-3 ${selectedForm === 'livre' ? 'border-b border-gray-700 font-bold' : 'border-b border-gray-700'
                            }`}
                            onClick={() => setSelectedForm('livre')}>Passe Livre</button>
                    </div>
                </div>


                <div className='text-center font-semibold my-3 pb-6'>
                    <p>Preencha os seus dados</p>
                </div>
            </header>
            {selectedForm === 'escolar' && <PasseEscolar />}
            {selectedForm === 'livre' && <PasseLivre />}
        </section>
    )
}
