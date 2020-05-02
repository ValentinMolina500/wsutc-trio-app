import { Observer } from "./Observer";

export interface Subject {
	register(o: Observer): void;
	unregister(o: Observer): void;
	notifyObserver(): void;
}