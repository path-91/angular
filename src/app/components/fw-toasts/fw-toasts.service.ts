import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import {FwToastsContainerComponent} from './fw-toasts-container.component';
import {Overlay} from '@angular/cdk/overlay';
import {FwToasts} from './fw-toasts.interface';

@Injectable()
export class FwToastsService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private overlay: Overlay,
  ) {}

  private container = this.createContainer();
  private counterToasts: number = 0;

  create(title: string, text: string) {
    const data: FwToasts = {
      id: ++this.counterToasts,
      title: title,
      text: text,
      createdAt: new Date()
    };
    this.container.createToast(data);
  }

  createContainer() {
    // Создать ссылку на компонент
    const factory = this.componentFactoryResolver.resolveComponentFactory(FwToastsContainerComponent);
    const componentRef = factory.create(this.injector);

    // Включаем механизм обнаружения изменений что бы избежать "грязных" элементов
    componentRef.changeDetectorRef.detectChanges();

    // Присоединяем компонент к appRef, чтобы он находился внутри дерева компонентов ng
    this.appRef.attachView(componentRef.hostView); // Загрузить представление в корень приложения

    // вставляем контейнер сообщений в cdk-overlay-container
    const overlayPane = this.overlay.create().overlayElement;
    overlayPane.style.zIndex = '1010';
    overlayPane.appendChild((componentRef.hostView as EmbeddedViewRef<{}>).rootNodes[0] as HTMLElement);
    return componentRef.instance;
  }
}
