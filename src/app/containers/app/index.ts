import { SearchBoxComponent } from './search-box/search-box.component';
import { HereMapComponent } from './here-map/here-map.component';
import { PlaceDetailPopupComponent } from './place-detail-popup/place-detail-popup.component';
import { GmapWithRouteComponent } from './gmap-with-route/gmap-with-route.component';
import { NavigationSearchBoxComponent } from './navigation-search-box/navigation-search-box.component';
import { NavigationSearchBoxItemMenuComponent } from './navigation-search-box-item-menu/navigation-search-box-item-menu.component';
import { NativeGmapWithRouteComponent } from './native-gmap-with-route/native-gmap-with-route.component';

export {
  SearchBoxComponent,
  HereMapComponent,
  GmapWithRouteComponent,
  NativeGmapWithRouteComponent,
  NavigationSearchBoxComponent,
  NavigationSearchBoxItemMenuComponent,
};
export * from './place-detail-popup/place-detail-popup.component';
export * from './here-map/mock-here-map.component';
export * from './here-map/here-map.module';

export const components: Array<any> = [
  SearchBoxComponent,
  PlaceDetailPopupComponent,
  GmapWithRouteComponent,
  NativeGmapWithRouteComponent,
  NavigationSearchBoxComponent,
  NavigationSearchBoxItemMenuComponent,
];
