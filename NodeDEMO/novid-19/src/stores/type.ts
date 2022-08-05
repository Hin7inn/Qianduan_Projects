export interface ShowAddSwitch {
	noInfect: boolean;
	localConfirm: boolean;
	heal: boolean;
	nowSevere: boolean;
	suspect: boolean;
	dead: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
	localinfeciton: boolean;
	all: boolean;
	confirm: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	heal: number;
	nowConfirm: number;
	dead: number;
	showRate: boolean;
	mtime: string;
	adcode: string;
	confirm: number;
	showHeal: boolean;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Today {
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
}

export interface Total {
	adcode: string;
	dead: number;
	heal: number;
	mediumRiskAreaNum: number;
	showRate: boolean;
	showHeal: boolean;
	mtime: string;
	confirm: number;
	continueDayZeroConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
	wzz: number;
	provinceLocalConfirm: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	showHeal: boolean;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
	confirm: number;
	heal: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	dead: number;
	nowConfirm: number;
	showRate: boolean;
	wzz: number;
	mtime: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	dead: number;
	nowSevere: number;
	noInfect: number;
	mtime: string;
	localConfirmAdd: number;
	highRiskAreaNum: number;
	localConfirm: number;
	confirm: number;
	importedCase: number;
	mRiskTime: string;
	suspect: number;
	noInfectH5: number;
	nowLocalWzz: number;
	deadAdd: number;
	mediumRiskAreaNum: number;
	heal: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	localConfirmH5: number;
	local_acc_confirm: number;
	localWzzAdd: number;
	confirmAdd: number;
	nowConfirm: number;
}

export interface ChinaAdd {
	noInfect: number;
	localConfirmH5: number;
	confirm: number;
	heal: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	localConfirm: number;
	noInfectH5: number;
	dead: number;
	nowConfirm: number;
}

export interface Diseaseh5Shelf {
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
}

export interface StatisGradeCityDetail {
	dead: number;
	heal: number;
	grade: string;
	sdate: string;
	syear: number;
	wzz_add: string;
	nowConfirm: number;
	city: string;
	confirmAdd: number;
	confirm: number;
	date: string;
	mtime: string;
	province: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}