import angular from 'angular';
import ngbBookmarksPanel from './ngbBookmarksPanel';
import ngbBrowser from './ngbBrowser';
import ngbDataSets from './ngbDataSets';
import ngbFeatureInfoPanel from './ngbFeatureInfoPanel';
import ngbLogModule from './ngbLog';
import ngbMolecularViewer from './ngbMolecularViewer';
import ngbProjectInfoPanel from './ngbProjectInfoPanel';
import ngbTracksView from './ngbTracksView';
import ngbVariantPanel from './ngbVariantPanel';
import ngbVariantsTablePanel from './ngbVariantsTablePanel';
import ngbOrganizeTracks from './ngbOrganizeTracks';
import ngbGenomeAnnotations from './ngbGenomeAnnotations';

export default angular.module('NGB_Panels', [
    ngbBookmarksPanel,
    ngbBrowser,
    ngbDataSets,
    ngbLogModule,
    ngbMolecularViewer,
    ngbProjectInfoPanel,
    ngbTracksView,
    ngbVariantPanel,
    ngbVariantsTablePanel,
    ngbFeatureInfoPanel,
    ngbOrganizeTracks,
    ngbGenomeAnnotations
]).name;