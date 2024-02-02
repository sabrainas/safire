import React from 'react'
import './style.css'

export default function PasseEscolar() {
    return (
        <>
            <section className='border rounded-lg shadow-lg flex flex-col flex-wrap w-full max-w-[40rem] p-6 bg-gray-200'>

                <header className='flex flex-col'>
                    <div>
                        <h1 className='text-lg text-center font-bold my-3'>Passe Escolar</h1>
                    </div>

                    <div className='text-center font-semibold my-3 pb-6'>
                        <p>Preencha os seus dados</p>
                    </div>
                </header>

                <form>
                    <div className=''>
                        <label htmlFor="name">Nome:
                            <input type="text" placeholder="Enter your name" />
                        </label>

                        <label htmlFor="ra">RA:
                            <input type="text" inputMode="numeric" />
                        </label>
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

                    </div>

                    <label htmlFor="rg">RG: <input
                        type="text"
                        placeholder="__.____.___-_"
                    />
                    </label>

                    <label htmlFor="date-expedition">Data de Expedição:
                        <input type="date" placeholder='dd/mm/aaaa' />
                    </label>

                    <label htmlFor="date-birthday"> Data de nascimento:
                        <input type="date" placeholder='dd/mm/aaaa' />
                    </label>

                    <label htmlFor="cpf">CPF:
                        <input type="text" placeholder='___-___-___-__' />
                    </label>

                    <label htmlFor="telefone">
                        Telefone:
                        <input type="text" placeholder='(99) 99999-9999' />
                    </label>

                    <label htmlFor="city">
                        Nome da Mãe:
                        <input type="text" placeholder='' />
                    </label>

                    <label htmlFor="email">
                        E-mail:
                        <input type="text" placeholder='' />
                    </label>

                    <label htmlFor="address">
                        Endereço:
                        <input type="text" placeholder='' />
                    </label>

                    <label htmlFor="number">
                        nº:
                        <input type="text" placeholder='' />
                    </label>

                    <label htmlFor="cep">
                        Cep:
                        <input type="text" placeholder='_____-___' />
                    </label>
                </form>
            </section>

        </>
    )
}
