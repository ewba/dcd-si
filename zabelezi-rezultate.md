---
layout: single-page
title: Zabeleži rezultate
css: form.css
nebelezi: 1
---

Hvala, ker čistiš z nami! Da bomo vedeli, kakšen je naš skupni učinek, te prosimo za vnos rezultatov.
Uradni dan digitalnega čiščenja bo **16. marec 2024**! Ker pa se spremembe ne dogajajo čez noč, lahko z nami čistiš že od februarja naprej.

<div style="display:flex; justify-content: space-evenly; flex-wrap: wrap; margin: 1em 0">
	<button id="osub-btn">Obrazec za posameznike</button>
	<button id="msub-btn">Obrazec za ostale</button>
</div>

Tisti, ki želite biti obveščeni o rezultatih projekta, se lahko naročite na obvestila v obrazcu na dnu strani.

<div class="formcont" id="posameznik">
<h2>Obrazec za posameznike</h2>
<p>Če si čistil/a več naprav, seštej izbrisane količine ali pa izpolni obrazec za vsako posebej.</p>

<form id="oddaj1" class="oddaj">
	<div class="dataform-checkbox-group field-cistil-sem">
		<label for="cistil-sem" class="vprasanje">Čistil/a sem</label>
		<div class="checkbox-group">
			<div class="dataform-checkbox">
				<input name="cistil-sem[]" id="cistil-sem-0" checked value="privat" type="checkbox">
				<label for="cistil-sem-0">zasebne naprave</label>
			</div>
			<div class="dataform-checkbox">
				<input name="cistil-sem[]" id="cistil-sem-1" value="sluzba" type="checkbox">
				<label for="cistil-sem-1">službene naprave</label>
			</div>
			<div class="dataform-checkbox">
				<input name="cistil-sem[]" id="cistil-sem-2" value="druge" type="checkbox">
				<label for="cistil-sem-2">druge naprave</label>
			</div>
		</div>
	</div>
	<div>
		<label for="number-1" class="vprasanje">Količina izbrisanih podatkov (e-pošta)</label>
		<div class="number-units">
			<input type="number" min="0" value="0" step="0.1" required name="number-1" id="number-1" title="v MB/GB (gigabajtih)">
			<div class="dataform-radio-group">
				<div class="radio-group">
					<div class="dataform-radio-inline">
						<input name="enota-1" id="enota-1-0" required value="mb" type="radio">
						<label for="enota-1-0">MB (megabajtov)</label>
					</div>
					<div class="dataform-radio-inline">
						<input name="enota-1" id="enota-1-1" required value="gb" type="radio" checked>
						<label for="enota-1-1">GB (<span class="tooltip" aria-hidden="true" data-text="1 gigabajt je 1024 megabajtov">gigabajtov</span>)</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<label for="number-2" class="vprasanje">Količina izbrisanih podatkov (na računalniku in v oblaku)</label>
		<div class="number-units">
			<input type="number" min="0" value="0" step="0.1" required name="number-2" id="number-2" title="v MB/GB (gigabajtih)">
			<div class="dataform-radio-group">
				<div class="radio-group">
					<div class="dataform-radio-inline">
						<input name="enota-2" id="enota-2-0" required value="mb" type="radio">
						<label for="enota-2-0">MB (megabajtov)</label>
					</div>
					<div class="dataform-radio-inline">
						<input name="enota-2" id="enota-2-1" required value="gb" type="radio" checked>
						<label for="enota-2-1">GB (<span class="tooltip" aria-hidden="true" data-text="1 gigabajt je 1024 megabajtov">gigabajtov</span>)</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<label for="number-3" class="vprasanje">Količina izbrisanih podatkov (na mobilnih napravah)</label>
		<div class="number-units">
			<input type="number" min="0" value="0" step="0.1" required name="number-3" id="number-3" title="v MB/GB (gigabajtih)">
			<div class="dataform-radio-group">
				<div class="radio-group">
					<div class="dataform-radio-inline">
						<input name="enota-3" id="enota-3-0" required value="mb" type="radio">
						<label for="enota-3-0">MB (megabajtov)</label>
					</div>
					<div class="dataform-radio-inline">
						<input name="enota-3" id="enota-3-1" required value="gb" type="radio" checked>
						<label for="enota-3-1">GB (<span class="tooltip" aria-hidden="true" data-text="1 gigabajt je 1024 megabajtov">gigabajtov</span>)</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<label for="komentar" class="vprasanje">Nam želiš še kaj sporočiti?		  </label>
		<textarea type="textarea" rows="5" cols="60" placeholder="Pripombe, pobude, pritožbe, pohvale pa primeri posebnih praks ..." id="komentar" name="komentar"></textarea>
	</div>
	<input type="hidden" name="hiddata" value="6e947e58d8d12d6ca1f8d3d5e1d3892c">
	<input type="submit" name="subdata" value="Pošlji" class="button">
</form>
<div id="formConfirm"></div>

</div>


<div class="formcont" id="skupine">
<h2>Obrazec za skupine</h2>
<p>Če ste čistili v okviru podjetja, šole, druge organizacije ali večje neformalne skupine, je ta obrazec za vas. Za manjše primere bo morda lažje večkrat izpolniti obrazec za posameznike, da se izognete dodatnemu računanju.</p>

<form id="oddaj2" class="oddaj">
	<div class="dataform-text field-vzdevek">
		<label for="vzdevek" class="vprasanje">Naziv ali poljubni vzdevek skupine</label>
		<input type="text" name="vzdevek" id="vzdevek" title="Poljubno besedilo, da lahko ločimo vnose med sabo" size="50">
	</div>
	<div>
		<label for="number-0" class="vprasanje">Število sodelujočih</label>
		<input type="number" min="0" placeholder="0" required name="number-0" id="number-0">
	</div>
	<div>
		<label for="number-1" class="vprasanje">Količina izbrisanih podatkov (e-pošta)</label>
		<div class="number-units">
			<input type="number" min="0" value="0" step="0.1" required name="number-1" id="number-1" title="v MB/GB (gigabajtih)">
			<div class="dataform-radio-group">
				<div class="radio-group">
					<div class="dataform-radio-inline">
						<input name="enota-1" id="enota-1-0" required value="mb" type="radio">
						<label for="enota-1-0">MB (megabajtov)</label>
					</div>
					<div class="dataform-radio-inline">
						<input name="enota-1" id="enota-1-1" required value="gb" type="radio" checked>
						<label for="enota-1-1">GB (<span class="tooltip" aria-hidden="true" data-text="1 gigabajt je 1024 megabajtov">gigabajtov</span>)</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<label for="number-2" class="vprasanje">Količina izbrisanih podatkov (na računalniku in v oblaku)</label>
		<div class="number-units">
			<input type="number" min="0" value="0" step="0.1" required name="number-2" id="number-2" title="v MB/GB (gigabajtih)">
			<div class="dataform-radio-group">
				<div class="radio-group">
					<div class="dataform-radio-inline">
						<input name="enota-2" id="enota-2-0" required value="mb" type="radio">
						<label for="enota-2-0">MB (megabajtov)</label>
					</div>
					<div class="dataform-radio-inline">
						<input name="enota-2" id="enota-2-1" required value="gb" type="radio" checked>
						<label for="enota-2-1">GB (<span class="tooltip" aria-hidden="true" data-text="1 gigabajt je 1024 megabajtov">gigabajtov</span>)</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<label for="number-3" class="vprasanje">Količina izbrisanih podatkov (na mobilnih napravah)</label>
		<div class="number-units">
			<input type="number" min="0" value="0" step="0.1" required name="number-3" id="number-3" title="v MB/GB (gigabajtih)">
			<div class="dataform-radio-group">
				<div class="radio-group">
					<div class="dataform-radio-inline">
						<input name="enota-3" id="enota-3-0" required value="mb" type="radio">
						<label for="enota-3-0">MB (megabajtov)</label>
					</div>
					<div class="dataform-radio-inline">
						<input name="enota-3" id="enota-3-1" required value="gb" type="radio" checked>
						<label for="enota-3-1">GB (<span class="tooltip" aria-hidden="true" data-text="1 gigabajt je 1024 megabajtov">gigabajtov</span>)</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<label for="aktivnosti" class="vprasanje">Katere aktivnosti ste izvedli v sklopu akcije?		  </label>
		<textarea type="textarea" rows="5" cols="60" placeholder="Npr. samostojno čiščenje zaposlenih, ozaveščevalne aktivnosti, učna ura za učence, vključitev IT oddelka …" id="aktivnosti" name="aktivnosti"></textarea>
	</div>
	<div>
		<label for="komentar" class="vprasanje">Nam želiš še kaj sporočiti?		  </label>
		<textarea type="textarea" rows="5" cols="60" placeholder="Pripombe, pobude, pritožbe, pohvale pa primeri posebnih praks ..." id="komentar" name="komentar"></textarea>
	</div>
	<input type="hidden" name="hiddata" value="6e947e58d8d12d6ca1f8d3d5e1d3892c">
	<input type="submit" name="subdata" value="Pošlji" class="button">
</form>
<div id="formConfirm"></div>

</div>
