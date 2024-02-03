import { useState } from 'react';
import './style.css'

export default function PasseLivre() {
    const [etapaAtual, setEtapaAtual] = useState(1);

    const handleProximo = () => {
        if (etapaAtual < 3) {
            setEtapaAtual(etapaAtual + 1);
        }
    };

    return (
        <>
            <form >
                {/* etapa 1  */}
                {etapaAtual === 1 && (
                    <div className='flex flex-col'>
                        <div className='w-full'>
                            <label htmlFor="name">Nome:
                                <input type="text" />
                            </label>

                            <label htmlFor="name-mother">
                                Nome da Mãe:
                                <input type="text" />
                            </label>
                        </div>


                        <div className="flex">
                            <label htmlFor="course" >Curso:
                                <select name="course" id="course">
                                    <option value="">Selecione o seu curso: </option>
                                    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                                    <option value="gpi">Gestão da Produção Industrial</option>
                                    <option value="la">Logística Aeroportuária</option>
                                    <option value="log">Logística</option>
                                </select>
                            </label>

                            <label htmlFor="semestre">Semestre:
                                <select name="semestre" id="semestre">
                                    <option value="">Selecione o semestre: </option>
                                    <option value="1">1º Semestre</option>
                                    <option value="2">2º Semestre</option>
                                    <option value="3">3º Semestre</option>
                                    <option value="4">4º Semestre</option>
                                    <option value="5">5º Semestre</option>
                                    <option value="6">6º Semestre</option>
                                    <option value="7">7º Semestre</option>
                                    <option value="8">8º Semestre</option>
                                </select>
                            </label>

                            <label htmlFor="ra" >RA:
                                <input type="text" inputMode="numeric" className='w-44' size={13} />
                            </label>

                        </div>
                    </div>
                )}


                {/* etapa 2 */}
                {etapaAtual === 2 && (
                    <div className='flex flex-col'>
                        <div className='grid grid-cols-3'>
                            <label htmlFor="rg">RG: <input
                                type="text"
                                maxLength={9}
                            />
                            </label>

                            <label htmlFor="date-birthday"> Data de nascimento:
                                <input type="date" placeholder='dd/mm/aaaa' />
                            </label>
                            <label htmlFor="date-expedition">Data de Expedição:
                                <input type="date" placeholder='dd/mm/aaaa' />
                            </label>

                        </div>

                        <div className='grid grid-cols-2'>
                            <label htmlFor="email">
                                E-mail:
                                <input type="email" placeholder='' />
                            </label>
                            <label htmlFor="cpf">CPF:
                                <input type="text" placeholder='___-___-___-__' />
                            </label>
                        </div>
                    </div>
                )}

                {/* etapa 3 */}
                {etapaAtual === 3 && (
                    <div className='flex flex-col'>
                        <div className="w-full flex justify-between">
                            <label htmlFor="cep">
                                Cep:
                                <input type="text" placeholder='_____-___' />
                            </label>

                            <label htmlFor="number">
                                nº:
                                <input type="text" placeholder='' />
                            </label>

                            <label htmlFor="telefone">
                                Telefone:
                                <input type="tel" placeholder='(99) 99999-9999' />
                            </label>
                        </div>

                        <label htmlFor="address">
                            Endereço:
                            <input type="text" placeholder='' />
                        </label>
                    </div>
                )}

                {etapaAtual > 1 && (
                    <button
                        type="button"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setEtapaAtual((etapa) => etapa - 1)}
                    >
                        Anterior
                    </button>
                )}

                {etapaAtual < 3 ? (
                    <button
                        type="button"
                        className="bg-red-600 text-white font-bold py-2 px-4 rounded mx-2"
                        onClick={handleProximo}
                    >
                        Próximo
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Enviar
                    </button>
                )}
            </form>
        </>

    )
}
