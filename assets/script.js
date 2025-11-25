document.addEventListener('DOMContentLoaded', function () {
	
	// Objeto de dados com as informações de financiamento (ESTRUTURA MANTIDA)
	const dadosFinanciamento = [
		// SBPE (Sistema Brasileiro de Poupança e Empréstimo)
		// TR (Taxa Referencial)
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "SAC",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 70,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 50,
			comprometimentoRenda: 25,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "SAC",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		{
			rowSpanText: "SBPE",
			rowSpanCount: 4,
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 90,
			comprometimentoRenda: 30,
		},
		{
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		// Poupança
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "SAC",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 70,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "PRICE",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 50,
			comprometimentoRenda: 25,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "SAC",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "PRICE",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		{
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 90,
			comprometimentoRenda: 30,
		},
		{
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "PRICE",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		// Minha Casa, Minha Vida (MCMV)
		{
			show: false,
			modalidade: "MCMV - Faixa 1",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 70,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "MCMV - Faixa 2",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "MCMV - Faixa 3",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "MCMV - Faixa 4",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		// MCMV - Empreendimento
		{
			rowSpanText: "MCMV",
			rowSpanCount: 7,
			modalidade: "MCMV - Faixa 1",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 2160,
			minRenda: 0,
			infoComRedutor: "Até <a href='#limite-cidade' class='text-body text-decoration-underline'>limite cidade</a>: 6.7%<br><br>Acima do limite: 7.93%",
			infoSemRedutor: "Até <a href='#limite-cidade' class='text-body text-decoration-underline'>limite cidade</a>: 7.3%<br><br>Acima do limite: 8.47%",
			infosRowSpanCount: 3,
		},
		{
			modalidade: "MCMV - Faixa 1,5",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 2850,
			minRenda: 2160.01,
		},
		{
			modalidade: "MCMV - Faixa 1 (Estendida)",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 3500,
			minRenda: 2850.01,
		},
		{
			modalidade: "MCMV - Faixa 2",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 4000,
			minRenda: 3500.01,
			infoComRedutor: "Até <a href='#limite-cidade' class='text-body text-decoration-underline'>limite cidade</a>: 6.7%<br><br>Acima do limite: 7.93%",
			infoSemRedutor: "Até <a href='#limite-cidade' class='text-body text-decoration-underline'>limite cidade</a>: 7.3%<br><br>Acima do limite: 8.47%",
			infosRowSpanCount: 2,
		},
		{
			modalidade: "MCMV - Faixa 2,5",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 4700,
			minRenda: 4000.01,
		},
		{
			modalidade: "MCMV - Faixa 3",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 8600,
			minRenda: 4700.01,
			infoComRedutor: "Até 350 mil - 7.93%<br><br>De 350 mil à 500 mil - 10.47%",
			infoSemRedutor: "Até 350 mil - 8.47%<br><br>De 350 mil à 500 mil - 10.47%",
		},
		{
			modalidade: "MCMV - Faixa 4 (Classe média)",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 12000,
			minRenda: 8600.01,
			infoComRedutor: "Redutor não se aplica. Taxa de 10.47%",
			infoSemRedutor: "Taxa de 10.47%",
		},
	];
	
	const tabelaBody = document.getElementById('tabela-financiamento-body');
	
	/**
	 * Pre-processes data to dynamically add rowspan information.
	 * @param {Array<Object>} data - The data array to process.
	 * @param {Array<string>} columns - The column keys to check for rowspan.
	 * @returns {Array<Object>} The processed data with new rowspan properties.
	 */
	function preprocessDataForRowspan(data, columns) {
		const processedData = data.map(item => ({...item}));
		
		columns.forEach(column => {
			let i = 0;
			while (i < processedData.length) {
				const currentValue = processedData[i][column];
				let count = 1;
				while (i + count < processedData.length && processedData[i + count][column] === currentValue) {
					count++;
				}
				
				processedData[i][`${column}Rowspan`] = count;
				for (let j = 1; j < count; j++) {
					processedData[i + j][`${column}Rowspan`] = 0;
				}
				i += count;
			}
		});
		return processedData;
	}
	
	/**
	 * Formats a numeric value into a percentage string.
	 * @param {number|null} value The number to format.
	 * @returns {string} The formatted percentage string or a dash.
	 */
	function formatPercentage(value) {
		if (typeof value === 'number' && !isNaN(value)) {
			return `${value}%`;
		}
		return "-";
	}
	
	/**
	 * Renders the data into the HTML table.
	 */
	function renderTable() {
		if (!tabelaBody) return;
		tabelaBody.innerHTML = '';
		
		const visibleData = dadosFinanciamento.filter(item => !item.hasOwnProperty('show') || item.show !== false);
		const columnsToGroup = [
			'amortizacao',
			'indexador',
			'prazoMinimo',
			'prazoMaximo',
			'cotaMaxima',
			'comprometimentoRenda'
		];
		
		const processedData = preprocessDataForRowspan(visibleData, columnsToGroup);
		
		processedData.forEach(item => {
			const row = document.createElement('tr');
			
			// Note the camelCase properties like 'amortizacaoRowspan' being used
			row.innerHTML = `
                <td class="text-center fw-normal t-wrap">${item.modalidade}</td>
                
                ${item.amortizacaoRowspan > 0 ? `<td rowspan="${item.amortizacaoRowspan}">${item.amortizacao}</td>` : ''}
                ${item.indexadorRowspan > 0 ? `<td rowspan="${item.indexadorRowspan}">${item.indexador}</td>` : ''}
                ${item.prazoMinimoRowspan > 0 ? `<td rowspan="${item.prazoMinimoRowspan}">${item.prazoMinimo}</td>` : ''}
                ${item.prazoMaximoRowspan > 0 ? `<td rowspan="${item.prazoMaximoRowspan}">${item.prazoMaximo}</td>` : ''}
                ${item.cotaMaximaRowspan > 0 ? `<td rowspan="${item.cotaMaximaRowspan}">${formatPercentage(item.cotaMaxima)}</td>` : ''}
                ${item.comprometimentoRendaRowspan > 0 ? `<td rowspan="${item.comprometimentoRendaRowspan}">${formatPercentage(item.comprometimentoRenda)}</td>` : ''}
                
                <td>${item.hasOwnProperty("maxRenda") ? new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.minRenda) + " à " + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.maxRenda) : "-"}</td>
                
                ${item.infosRowSpanCount ? `<td rowspan="${item.infosRowSpanCount}">${item.infoComRedutor}</td>` : (item.infoComRedutor && !item.infosRowSpanCount) || item.modalidade.toLowerCase().includes("sbpe") ? `<td>${item.infoComRedutor || "-"}</td>` : ''}
                ${item.infosRowSpanCount ? `<td rowspan="${item.infosRowSpanCount}">${item.infoSemRedutor}</td>` : (item.infoSemRedutor && !item.infosRowSpanCount) || item.modalidade.toLowerCase().includes("sbpe") ? `<td>${item.infoSemRedutor || "-"}</td>` : ''}
            `;
			
			tabelaBody.appendChild(row);
		});
	}
	
	renderTable();
});
