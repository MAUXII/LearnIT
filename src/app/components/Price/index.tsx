export const Price = () =>{
    return(
<div className="overflow-hidden w-full">
  <div className="max-w-[100rem] w-full  md:px-6 pt-[4rem] pb-[2rem]  ">

    <div className="relative  xl:mx-auto w-full">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div>
          
          <div className="shadow-xl shadow-gray-200 p-5 relative z-10 backdrop-blur-sm bg-white/10 border rounded-xl md:p-10 dark:bg-preto/10 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">StudentIT</h3>
            <div className="text-sm text-gray-500">Para estudo acadêmico e evolução interpessoal</div>

            <div className="mt-5">
              <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">R$18</span>
              <span className="text-lg font-bold text-gray-800 dark:text-gray-200">.00</span>
              <span className="ms-3 text-gray-500">BRL / mês</span>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
          
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                  Ambiente Amigável
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Feedback de Exercicios
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                  Conteúdo Extensivo
                  </span>
                </li>
              </ul>
             
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex space-x-3">
                  <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                  Professores 24 horas
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                  Simulação de Entrevistas
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                  Conexão com Empresas
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm text-gray-500">Cancele quando quiser</p>
                <p className="text-sm text-gray-500">Cartão não é obrigatório</p>
              </div>

              <div className="flex justify-end">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white/10 text-gray-800 shadow-sm hover:bg-white/100 disabled:opacity-50 disabled:pointer-events-none dark:bg-preto dark:border-gray-700 dark:text-white dark:hover:bg-stone-950/40 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Teste Grátis</button>
              </div>
            </div>
          </div>
        </div>

        

        <div>
      
          <div className="shadow-xl shadow-gray-200 p-5 backdrop-blur-sm relative z-10 bg-white/10 border rounded-xl md:p-10 dark:bg-preto/10 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">ExpertIT</h3>
            <div className="text-sm text-gray-500">Para crescimento profissional</div>
            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-gray-800">Mais Popular</span>

            <div className="mt-5">
              <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">R$36</span>
              <span className="text-lg font-bold text-gray-800 dark:text-gray-200">.99</span>
              <span className="ms-3 text-gray-500">BRL / mês</span>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
            
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Ambiente Amigável
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                  Feedback de Exercicios
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Conteúdo Extensivo
                  </span>
                </li>
              </ul>
   
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Professores 24 horas
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Simulação de Entrevistas
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-blue-800/30 dark:text-indigo-500">
                    <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Conexão com Empresas
                  </span>
                </li>
              </ul>
             
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm text-gray-500">Cancele quando quiser</p>
                <p className="text-sm text-gray-500">Cartão não é obrigatório</p>
              </div>

              <div className="flex justify-end">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Começar</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    
      <div className="hidden md:block absolute top-0 end-0 translate-y-[-50px] translate-x-[20px]">
        <svg className="w-16 h-auto text-blue-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
          <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
          <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
        </svg>
      </div>
     

     
      <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
        <svg className="w-56 h-auto text-indigo-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
        </svg>
      </div>
     
    </div>

    <div className="mt-7 text-center">
      <p className="text-xs text-gray-400">
        Preços em BRL. Taxas podem ser aplicadas.
      </p>
    </div>
  </div>
</div>

    )}
