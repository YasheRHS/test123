// JavaScript Document

_MgrO = {
	name: "_Mgr ",
	word: "00_default"
};

_MgrO.start = function(){

	_MonO.start_new(this.word);	
	
	//это состояние объектов на конец Цеочки или нет?
	console.log(_MonO, _OptO);
};

_Mgr = new Proxy(_MgrO,{});





_MonO  = Object.create(_MgrO);

_MonO.start_new = function (state_name){
	this.name = "_MonO";
	this.t_sec = "._MonSec";
	this.sh = 21;
	this.vs = 30;
	this.razmer = "Разворот";
	this.pl = 80;
	this.sch_na = "Напол";
	this.tirag = 1;
	this.plus = 0;
	this.umn_t = 1;
	this.napol = 1;
	this.minus = 0;
	this.umn_n =1;
	
	

	jQuery(this.t_sec +" .sh input").val(this.sh);
	jQuery(this.t_sec +" .vs input").val(this.vs);
	jQuery(this.t_sec +" .pl input").val(this.pl);
	
	
	_OptO.start_new(state_name);
};

_Mon = new Proxy(_MonO,{
set(target, prop, val) {
	/*if (typeof val == "number") {
    	
		target[prop] = val;
      	console.log ("Число");
		
		return true;
		    
	} else {
	
		target[prop] = val;
      	console.log ("Не число");
		
    }*/
	
	
	
  }	
	
});





_OptO  = Object.create(_MonO);

_OptO.start_new = function (state_name){	
	this.name = "_OptO";
	this.t_sec = "._OptSec";
	this.name_op = "Опция-1";
	this.tip_op = "Весовая";

		
	this.states = Object.create(_OptO);
	let t_state = this.states[state_name] = Object.create(this.states);
	
	this.ext_s = Object.create(_OptO);
	this.ext_s.name = "ext_s";
	
	t_state.sh_mat = 100;
	t_state.vs_mat = 100;
	t_state.cena_mat = 100;
	t_state.pl_mat = 80;
	t_state.proc_oth = 0;
	t_state.name = state_name;	
	t_state.sh = 21;
	t_state.vs = 30;
	t_state.plus = 0;
	t_state.umn_t = 1;
	t_state.minus = 0;
	t_state.umn_n =1;
	t_state.pl = 80;
	

	
	jQuery(this.t_sec +" .name_op input").val(this.name_op);
	jQuery(this.t_sec +" .sh input").val(this.sh);
	jQuery(this.t_sec +" .vs input").val(this.vs);
	jQuery(this.t_sec +" .sh_mat input").val(t_state.sh_mat);
	jQuery(this.t_sec +" .vs_mat input").val(t_state.vs_mat);
	jQuery(this.t_sec +" .pl_mat input").val(t_state.pl_mat);
	jQuery(this.t_sec +" .cena_mat input").val(t_state.cena_mat);
	jQuery(this.t_sec +" .pl input").val(t_state.pl);
	jQuery(this.t_sec +" .create_state input").val("Стейт-1");
	
	//jQuery("#currents_states").append("<p><b>"+ state_name +"</b></p>");
	jQuery(".my_states select").append("<option value= '"+state_name+"' selected ='selected'>"+state_name+"</option>");
	
}

_OptO.chk_state = function(){
/*_.each(_Opt.states, chk);
	
function chk (element, index, list){
	console.log (index);
}
*/	
	
let act_s_sort_abc = Object.fromEntries(Object.entries(_Opt.states).sort());
	
let kkk = Object.keys(act_s_sort_abc);
	
	kkk.forEach(function(item, i) {
		
	console.log (item);	
		
	});
	
	//console.log (kkk);
};

_Opt = new Proxy(_OptO,{});





jQuery(document).on('input', '._MonSec .sh input, ._MonSec .vs input', function (e){
	
	_Mon[this.id.slice(6, -10)] = Number(this.value);
			
	let sv = this.id.slice(6, -10);
	let zn = Number(this.value);			
			
	_Opt.chk_state(sv, zn);
	
	//console.log (e);	
});

jQuery(document).on('click', '.state_create_btn', function (e){
	
	let state_name = jQuery(".create_state input").val();
	let usl = jQuery(".usl textarea").val();	
	
	t_sate = _Opt.states[state_name] = Object.create(_Opt.states["00_default"]);
	t_sate.name = state_name;
	t_sate.usl = usl;
	
	let my_states = _.keys(_Opt.states);	
	my_states.sort();
	
	
	jQuery("#currents_states").html("");
	jQuery(".my_states select").html("");
	
	my_states.forEach(function(item, i) {	
		//jQuery("#currents_states").append("<span name='"+item+"'><b>"+item+", </b></span>");
		jQuery(".my_states select").append("<option value= '"+item+"'>"+item+"</option>");
		
	});
	
	jQuery(".my_states option[value='"+state_name+"']").attr("selected", "selected");

	
	eval (usl);

});

jQuery(document).on('click', '.state_del_btn', function (e){

	let del_name = jQuery(".my_states select").val();
	
	if (del_name == "00_default"){
		alert ("Стейт 00_default удалить нельзя, он - по-умолчанию!");
	} else {
		delete _Opt.states[del_name];
		
		jQuery("#currents_states [name = '"+del_name+"']").remove();
		
		jQuery(".my_states option[value ='"+del_name+"']").remove();
		jQuery(".my_states option").removeAttr("selected");
		jQuery(".my_states option[value ='00_default']").attr("selected", "selected");
		jQuery(".create_state input").val("00_default");
		
		
	}
});	
		
jQuery(document).on('change', '.my_states select', function (e){
	
	let edit_name = jQuery(this).val();
	let usl = _Opt.states[edit_name].usl;
	
	jQuery(".create_state input").val(edit_name);
	jQuery(".usl textarea").val(usl);
	
});	





_Mgr.start();















